import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#08030a]">
      {/* Aurora Waves - Static */}
      <div
        className="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] rounded-[40%_60%_70%_50%] opacity-[0.12] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #e8609a 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[10%] right-[-30%] w-[120vw] h-[120vw] rounded-[60%_40%_50%_70%] opacity-[0.12] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #f5a8c8 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-[-40%] left-[10%] w-[110vw] h-[110vw] rounded-[50%_70%_40%_60%] opacity-[0.12] blur-[110px]"
        style={{ background: 'radial-gradient(circle, #c0407a 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[90vw] h-[90vw] rounded-[70%_50%_60%_40%] opacity-[0.12] blur-[90px]"
        style={{ background: 'radial-gradient(circle, #f8d0a0 0%, transparent 70%)' }}
      />

      {/* Floating Orbs - Static */}
      <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] max-w-lg max-h-lg rounded-full bg-[#e8609a] opacity-20 blur-[80px]" />
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] max-w-md max-h-md rounded-full bg-[#f5a8c8] opacity-20 blur-[80px]" />
      <div className="absolute bottom-[30%] left-[40%] w-[35vw] h-[35vw] max-w-lg max-h-lg rounded-full bg-[#c0407a] opacity-20 blur-[80px]" />
      <div className="absolute bottom-[10%] right-[40%] w-[25vw] h-[25vw] max-w-sm max-h-sm rounded-full bg-[#f8d0a0] opacity-15 blur-[60px]" />
      <div className="absolute top-[10%] left-[10%] w-[20vw] h-[20vw] max-w-xs max-h-xs rounded-full bg-[#f5a8c8] opacity-15 blur-[60px]" />
    </div>
  );
}
