import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const PreLoader = ({ text = 'Loading...' }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white/60 flex flex-col items-center justify-center z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-slate-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-blue-800 animate-pulse" />
        </div>
      </div>
      {text && <p className="mt-4 text-gray-600 font-medium">{text}</p>}
    </div>
  );
};

export default PreLoader;