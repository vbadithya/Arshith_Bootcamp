import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { api } from '../services/api';

export default function LoginModal({ isOpen, onClose, initialMode = 'login', onSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const res = await api.studentRegister(name, email, password);
        if (res.success && onSuccess) {
          onSuccess(res.user);
          onClose();
        }
      } else {
        const res = await api.studentLogin(email, password);
        if (res.success && onSuccess) {
          onSuccess(res.user);
          onClose();
        }
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200" style={{ borderRadius: '2px' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              {mode === 'login' ? 'Welcome back' : 'Sign up'}
            </h2>
            <p className="text-sm text-slate-600">
              {mode === 'login' 
                ? 'Learn, grow, and build your future.' 
                : 'Join Arshith Boot Camp and start learning today.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 text-sm text-red-700 bg-red-50 border-l-4 border-red-600">
                {error}
              </div>
            )}
            
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-300 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white border border-slate-300 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-bold text-slate-900">Password</label>
                {mode === 'login' && (
                  <a href="#" className="text-sm text-brand-600 hover:underline">Forgot password?</a>
                )}
              </div>
              <input
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white border border-slate-300 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 text-base font-bold text-white bg-[#0056D2] hover:bg-[#00419e] disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center mt-2 rounded-sm shadow-sm"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <span>{mode === 'login' ? 'Login' : 'Join for Free'}</span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-3 text-sm text-slate-500 bg-white">or</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* SSO Options */}
          <div className="space-y-3">
            <button type="button" className="w-full py-3 px-4 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 rounded-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
            <button type="button" className="w-full py-3 px-4 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 rounded-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" color="#1877F2" />
              </svg>
              Continue with Facebook
            </button>
          </div>

        </div>
        
        {/* Footer Area */}
        <div className="bg-slate-50 px-8 py-5 border-t border-slate-200 text-center text-sm">
          <span className="text-slate-600">
            {mode === 'login' ? 'New to Arshith Boot Camp?' : 'Already have an account?'}
          </span>{' '}
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="font-bold text-[#0056D2] hover:underline"
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}
