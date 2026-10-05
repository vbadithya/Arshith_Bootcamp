import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full p-2 sm:p-4 shadow-2xl relative border border-slate-700">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/kqtD5dpn9C8?autoplay=1"
            title="ArshithGroup Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
