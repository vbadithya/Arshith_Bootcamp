import React from 'react';
import { Home, BookOpen, GraduationCap, User } from 'lucide-react';

export default function MobileBottomNav({ activeTab, setActiveTab, onOpenAuth }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'dashboard', label: 'Learning', icon: GraduationCap },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === 'profile') {
      onOpenAuth('login');
    } else {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
                isActive ? 'text-brand-600 font-extrabold scale-105' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
