import React from 'react';
import logo from 'figma:asset/d64722bfb83b68cdbb5533ba3090807de3f427fb.png';
import { GradientButton } from '../GradientButton';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-16 w-24 h-24 bg-white/5 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-white/5 rounded-full animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-white/10 rounded-full animate-[float_9s_ease-in-out_infinite_1.5s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <div className="animate-[slideUp_1s_ease-out] flex flex-col items-center">
          {/* Logo with white background */}
          <div className="bg-white rounded-[2rem] p-6 shadow-2xl mb-8 animate-[pulse_2s_ease-in-out_infinite]">
            <img 
              src={logo} 
              alt="ScrolUp Logo" 
              className="w-40 h-40 object-contain" 
              style={{ mixBlendMode: 'normal' }}
            />
          </div>
          
          {/* App name */}
          <h1 
            className="text-6xl text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Poppins' }}
          >
            ScrolUp
          </h1>
          
          {/* Tagline */}
          <p 
            className="text-white/90 text-center text-lg max-w-xs"
            style={{ fontFamily: 'Inter' }}
          >
            Découvrez les meilleures publicités du monde
          </p>
        </div>
      </div>
      
      {/* Button at bottom */}
      <div className="w-full z-10 animate-[fadeIn_1.5s_ease-in]">
        <button
          onClick={onComplete}
          className="group w-full px-6 py-5 bg-white/95 backdrop-blur-sm text-[#FF6A00] rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          style={{ fontFamily: 'Poppins' }}
        >
          <span className="text-lg">Commencer</span>
          <ChevronRight 
            size={24} 
            className="group-hover:translate-x-1 transition-transform duration-300" 
          />
        </button>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
