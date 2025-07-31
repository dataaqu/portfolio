import React from 'react';

export const Lights: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
      
      {/* Secondary ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-green-500/15 via-green-500/3 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-cyan-500/15 via-cyan-500/3 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-400/50 rounded-full animate-ping" style={{ animationDelay: '2.5s' }} />
      
      {/* Grid overlay with subtle glow */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};
