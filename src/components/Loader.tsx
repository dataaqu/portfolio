import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const graphicDesignerTextRef = useRef<HTMLHeadingElement>(null);
  const logoMarkRef = useRef<HTMLDivElement>(null);
  const colorPaletteRef = useRef<HTMLDivElement>(null);
  const geometricShapesRef = useRef<HTMLDivElement>(null);
  const designToolsRef = useRef<HTMLDivElement>(null);
  const typographyElementsRef = useRef<HTMLDivElement>(null);
  const creativeElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Split text animation function
    const splitText = (element: HTMLElement) => {
      const text = element.textContent || '';
      element.innerHTML = text
        .split('')
        .map((char, index) => `<span class="char" data-index="${index}" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
      return element.querySelectorAll('.char');
    };

    if (graphicDesignerTextRef.current) {
      // Split the text into individual characters
      const graphicDesignerChars = splitText(graphicDesignerTextRef.current);

      // GSAP Animation Timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
        }
      });

      // Animate logo mark first
      tl.fromTo(logoMarkRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0
      }, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
      }, 0.2);

      // Animate color palette swatches
      tl.fromTo(colorPaletteRef.current?.children || [], {
        scale: 0,
        y: 30,
        opacity: 0
      }, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, 0.8);

      // Animate geometric shapes
      tl.fromTo(geometricShapesRef.current?.children || [], {
        scale: 0,
        rotation: 45,
        opacity: 0
      }, {
        scale: 1,
        rotation: 0,
        opacity: 0.7,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15
      }, 1.0);

      // Animate design tools
      tl.fromTo(designToolsRef.current?.children || [], {
        scale: 0,
        y: -50,
        rotation: -90,
        opacity: 0
      }, {
        scale: 1,
        y: 0,
        rotation: 0,
        opacity: 0.8,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2
      }, 1.2);

      // Animate typography elements
      tl.fromTo(typographyElementsRef.current?.children || [], {
        scale: 0,
        x: 100,
        opacity: 0
      }, {
        scale: 1,
        x: 0,
        opacity: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, 1.5);

      // Animate creative elements
      tl.fromTo(creativeElementsRef.current?.children || [], {
        scale: 0,
        rotation: 180,
        opacity: 0
      }, {
        scale: 1,
        rotation: 0,
        opacity: 0.5,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15
      }, 1.8);

      // Set initial states for GRAPHIC DESIGNER letters
      gsap.set(graphicDesignerChars, { 
        opacity: 0, 
        y: 100, 
        rotationX: 90,
        scale: 0.3,
        transformOrigin: "center center"
      });

      // Animate GRAPHIC DESIGNER letters with design flair
      tl.to(graphicDesignerChars, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.08,
          from: "start"
        }
      }, 1.5);

      // Add color shift effect to GRAPHIC DESIGNER
      tl.to(graphicDesignerChars, {
        duration: 0.3,
        color: "#ff6b6b",
        ease: "power2.inOut",
        stagger: 0.04
      }, 2.0)
      .to(graphicDesignerChars, {
        duration: 0.3,
        color: "#4ecdc4",
        ease: "power2.inOut",
        stagger: 0.04
      }, 2.3)
      .to(graphicDesignerChars, {
        duration: 0.3,
        color: "#ffe66d",
        ease: "power2.inOut",
        stagger: 0.04
      }, 2.6)
      .to(graphicDesignerChars, {
        duration: 0.3,
        color: "#ffffff",
        ease: "power2.inOut",
        stagger: 0.04
      }, 2.9);

      // Add subtle floating animation to all elements
      tl.to([logoMarkRef.current, ...graphicDesignerChars], {
        duration: 4,
        y: "+=8",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.08,
          from: "random"
        }
      }, 3.5);

      // Add a backup timeout
      const backupTimeout = setTimeout(() => {
        if (onComplete) {
          console.log('Backup timeout triggered - completing loader');
          onComplete();
        }
      }, 5000);

      // Cleanup
      return () => {
        clearTimeout(backupTimeout);
        tl.kill();
      };
    }
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Geometric Background Shapes */}
      <div ref={geometricShapesRef} className="absolute inset-0">
        {/* Large Circle */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-purple-500 rounded-full opacity-20"></div>
        {/* Triangle */}
        <div className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[173px] border-l-transparent border-r-transparent border-b-cyan-400 opacity-30"></div>
        {/* Rectangle */}
        <div className="absolute top-1/3 left-1/3 w-48 h-32 bg-gradient-to-r from-pink-500 to-orange-500 opacity-25 rotate-12"></div>
        {/* Small Circles */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/2 w-16 h-16 bg-green-400 rounded-full opacity-50"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Logo Mark */}
      <div ref={logoMarkRef} className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="relative w-20 h-20">
          {/* Creative logo mark - Abstract design */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
          <div className="absolute inset-2 bg-black rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rotate-45"></div>
        </div>
      </div>

      {/* Design Tools */}
      <div ref={designToolsRef} className="absolute top-20 left-16">
        {/* Pencil Tool */}
        <div className="absolute w-2 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full transform rotate-45" style={{ top: '0px', left: '0px' }}>
          <div className="absolute top-0 w-2 h-3 bg-pink-300 rounded-t-full"></div>
          <div className="absolute bottom-0 w-1 h-4 bg-gray-800 left-0.5 rounded-b-full"></div>
        </div>
        
        {/* Brush Tool */}
        <div className="absolute w-1 h-16 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full transform rotate-12" style={{ top: '30px', left: '40px' }}>
          <div className="absolute top-0 w-3 h-3 bg-gray-300 rounded-full -left-1"></div>
        </div>
        
        {/* Ruler */}
        <div className="absolute w-24 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-sm transform -rotate-12" style={{ top: '60px', left: '20px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute top-0 w-px h-2 bg-gray-600" style={{ left: `${i * 8}px` }}></div>
          ))}
        </div>
      </div>

      {/* Typography Elements */}
      <div ref={typographyElementsRef} className="absolute top-32 right-16">
        {/* Aa Typography */}
        <div className="absolute text-4xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" style={{ top: '0px', right: '0px' }}>
          Aa
        </div>
        
        {/* Font Size Indicators */}
        <div className="absolute space-y-1" style={{ top: '60px', right: '20px' }}>
          <div className="text-xs text-gray-400">12px</div>
          <div className="text-sm text-gray-300">16px</div>
          <div className="text-lg text-gray-200">24px</div>
          <div className="text-xl text-white">32px</div>
        </div>
        
        {/* Kerning Lines */}
        <div className="absolute flex space-x-1" style={{ top: '40px', right: '0px' }}>
          <div className="w-8 h-px bg-cyan-400"></div>
          <div className="w-6 h-px bg-cyan-400"></div>
          <div className="w-10 h-px bg-cyan-400"></div>
        </div>
      </div>

      {/* Creative Elements */}
      <div ref={creativeElementsRef} className="absolute">
        {/* Bezier Curves */}
        <svg className="absolute w-32 h-24" style={{ bottom: '120px', left: '80px' }}>
          <path d="M10,50 Q30,10 50,50 T90,50" stroke="#ff6b6b" strokeWidth="2" fill="none" opacity="0.6"/>
          <circle cx="10" cy="50" r="2" fill="#ff6b6b"/>
          <circle cx="30" cy="10" r="2" fill="#ff6b6b"/>
          <circle cx="50" cy="50" r="2" fill="#ff6b6b"/>
          <circle cx="90" cy="50" r="2" fill="#ff6b6b"/>
        </svg>
        
        {/* Layers Panel */}
        <div className="absolute w-20 h-24 bg-gray-800 bg-opacity-60 rounded border border-gray-600" style={{ bottom: '140px', right: '100px' }}>
          <div className="p-2 space-y-1">
            <div className="w-full h-3 bg-blue-500 rounded text-xs opacity-80"></div>
            <div className="w-full h-3 bg-green-500 rounded text-xs opacity-60"></div>
            <div className="w-full h-3 bg-purple-500 rounded text-xs opacity-40"></div>
            <div className="w-full h-3 bg-orange-500 rounded text-xs opacity-60"></div>
          </div>
        </div>
        
        {/* Color Wheel */}
        <div className="absolute w-16 h-16 rounded-full" style={{ top: '100px', left: '120px', background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)', opacity: '0.7' }}>
          <div className="absolute inset-2 bg-black rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Grid Tool */}
        <div className="absolute w-20 h-20" style={{ top: '200px', right: '120px' }}>
          <div className="w-full h-full opacity-30" style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px'
          }}></div>
        </div>
      </div>

      {/* Color Palette */}
      <div ref={colorPaletteRef} className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>
        <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
        <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg"></div>
        <div className="w-8 h-8 bg-purple-500 rounded-full shadow-lg"></div>
        <div className="w-8 h-8 bg-pink-500 rounded-full shadow-lg"></div>
      </div>

      {/* Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          {/* GRAPHIC DESIGNER text */}
          <h1 
            ref={graphicDesignerTextRef}
            className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-white leading-none tracking-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
            }}
          >
            GRAPHIC DESIGNER
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Loader;
