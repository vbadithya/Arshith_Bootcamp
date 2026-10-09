import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDb, saveDb, logActivity } from '../db.js';
import { verifyAdminToken, JWT_SECRET } from '../middleware/auth.js';

const router = express.Router();

// Track failed login attempts for basic rate limiting / brute force protection
const loginAttempts = new Map();

router.post('/admin/login', (req, res) => {
  const { adminId, password } = req.body;

  if (!adminId || !password) {
    return res.status(400).json({ success: false, message: 'Invalid Admin ID or Password' });
  }

  const clientIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
  const attempts = loginAttempts.get(clientIp) || { count: 0, lockUntil: 0 };

  if (Date.now() < attempts.lockUntil) {
    const remainingSec = Math.ceil((attempts.lockUntil - Date.now()) / 1000);
    return res.status(429).json({
      success: false,
      message: `Too many failed login attempts. Please wait ${remainingSec} seconds.`
    });
  }

  const db = getDb();
  const admin = db.admin;

  // Check admin ID match
  const isIdValid = admin && admin.adminId.trim() === adminId.trim();

  // Check password match
  let isPasswordValid = false;
  if (isIdValid && admin.passwordHash) {
    isPasswordValid = bcrypt.compareSync(password, admin.passwordHash);
  }

  if (!isIdValid || !isPasswordValid) {
    attempts.count += 1;
    if (attempts.count >= 5) {
      attempts.lockUntil = Date.now() + 15 * 60 * 1000; // 15 minutes lockout after 5 fails
    }
    loginAttempts.set(clientIp, attempts);

    return res.status(401).json({
      success: false,
      message: 'Invalid Admin ID or Password'
    });
  }

  // Reset failed attempts on success
  loginAttempts.delete(clientIp);

  // Update last login
  admin.lastLogin = new Date().toISOString();
  saveDb(db);

  // Log activity
  logActivity({
    adminId: admin.adminId,
    action: 'ADMIN_LOGIN',
    target: 'Admin Portal',
    details: 'Successful administrator login',
    ipAddress: clientIp,
    device: req.headers['user-agent'] || 'Browser'
  });

  // Generate JWT token (expires in 24 hours)
  const token = jwt.sign(
    { adminId: admin.adminId, role: admin.role, name: admin.name },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  return res.json({
    success: true,
    message: 'Admin login successful',
    token,
    admin: {
      adminId: admin.adminId,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      createdAt: admin.createdAt,
      lastLogin: admin.lastLogin
    }
  });
});

router.get('/admin/me', verifyAdminToken, (req, res) => {
  const db = getDb();
  const admin = db.admin;
  return res.json({
    success: true,
    admin: {
      adminId: admin.adminId,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      createdAt: admin.createdAt,
      lastLogin: admin.lastLogin
    }
  });
});

router.post('/admin/change-password', verifyAdminToken, (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'All password fields are required.' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'New password and confirm password do not match.' });
  }

  // Password requirements: Min 8 chars, uppercase, lowercase, number, special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
    });
  }

  const db = getDb();
  const admin = db.admin;

  if (!bcrypt.compareSync(currentPassword, admin.passwordHash)) {
    return res.status(400).json({ success: false, message: 'Current password is incorrect.' });
  }

  admin.passwordHash = bcrypt.hashSync(newPassword, 10);
  saveDb(db);

  logActivity({
    adminId: admin.adminId,
    action: 'CHANGE_PASSWORD',
    target: 'Admin Account',
    details: 'Administrator password changed successfully',
    ipAddress: req.ip || '127.0.0.1',
    device: req.headers['user-agent'] || 'Browser'
  });

  return res.json({ success: true, message: 'Password updated successfully.' });
});

router.post('/admin/logout', verifyAdminToken, (req, res) => {
  logActivity({
    adminId: req.admin.adminId,
    action: 'ADMIN_LOGOUT',
    target: 'Admin Portal',
    details: 'Administrator logged out',
    ipAddress: req.ip || '127.0.0.1',
    device: req.headers['user-agent'] || 'Browser'
  });

  return res.json({ success: true, message: 'Logout successful.' });
});

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  
  const db = getDb();
  if (!db.students) db.students = [];
  
  const existingUser = db.students.find(s => s.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Email already registered' });
  }
  
  const student = {
    id: 'student_' + Date.now(),
    name: name || email.split('@')[0],
    email,
    passwordHash: bcrypt.hashSync(password, 10),
    enrolledCourses: [],
    certificates: [],
    createdAt: new Date().toISOString()
  };
  
  db.students.push(student);
  saveDb(db);
  
  const token = jwt.sign({ studentId: student.id, email: student.email }, JWT_SECRET, { expiresIn: '7d' });
  
  return res.json({
    success: true,
    message: 'Registration successful',
    token,
    user: { id: student.id, name: student.name, email: student.email }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  
  const db = getDb();
  if (!db.students) db.students = [];
  
  const student = db.students.find(s => s.email === email);
  if (!student || !bcrypt.compareSync(password, student.passwordHash)) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ studentId: student.id, email: student.email }, JWT_SECRET, { expiresIn: '7d' });
  
  return res.json({
    success: true,
    message: 'Login successful',
    token,
    user: { id: student.id, name: student.name, email: student.email }
  });
});

export default router;
