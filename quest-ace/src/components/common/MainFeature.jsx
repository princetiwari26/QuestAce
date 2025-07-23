import React, { useRef, useEffect, useState } from 'react';
import {
  ShieldCheck,
  Eye,
  Lock,
  Scale,
  User,
  Mic,
  Monitor
} from 'lucide-react';

const features = [
  { text: 'Trust & Ethics', icon: <ShieldCheck className="w-4 h-4" /> },
  { text: 'Live Proctoring', icon: <Eye className="w-4 h-4" /> },
  { text: 'Secure Browser Mode', icon: <Lock className="w-4 h-4" /> },
  { text: 'Fairness', icon: <Scale className="w-4 h-4" /> },
  { text: 'Face Detection', icon: <User className="w-4 h-4" /> },
  { text: 'Voice Detection', icon: <Mic className="w-4 h-4" /> },
  { text: 'Screen Monitoring', icon: <Monitor className="w-4 h-4" /> }
];

const MainFeature = () => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const scrollDuration = `${contentWidth / 50}s`;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50 to-white py-3">

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

      <div
        className="flex"
        style={{
          animation: `scroll ${scrollDuration} linear infinite`,
          animationPlayState: hovered ? 'paused' : 'running'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div ref={containerRef} className="flex items-center space-x-16 px-4 shrink-0">
          {features.map((item, idx) => (
            <FeatureCard key={idx} icon={item.icon} text={item.text} />
          ))}
        </div>

        <div className="flex items-center space-x-16 px-4 shrink-0">
          {features.map((item, idx) => (
            <FeatureCard key={`clone-${idx}`} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth}px);
          }
        }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, text }) => (
  <div className="flex items-center space-x-3 bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 group">
    <span className="text-green-600 group-hover:text-blue-800 transition-colors duration-300">
      {icon}
    </span>
    <span className="text-gray-900 font-semibold text-md whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default MainFeature;