
import React from 'react';
import { Zap, Code2, Palette, Box } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[400px] h-[400px] border border-white rounded-full animate-ping" />
        <div className="absolute w-[600px] h-[600px] border border-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>

      {/* Name Display */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-700 leading-none select-none">
          AYOUB
        </h1>
        
        <div className="flex justify-center gap-12 mt-12">
          {[Code2, Palette, Zap, Box].map((Icon, i) => (
            <div key={i} className="text-zinc-500 hover:text-blue-400 transition-colors duration-500 transform hover:scale-125 cursor-help group relative">
              <Icon size={24} />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </div>
  );
};

export default Hero;
