import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const digitalTextRef = useRef<HTMLHeadingElement>(null);
  const advertisingTextRef = useRef<HTMLHeadingElement>(null);
  const galaxyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animate the galaxy rotation
    if (galaxyRef.current) {
      gsap.to(galaxyRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

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

    if (digitalTextRef.current && advertisingTextRef.current) {
      // Split the text into individual characters
      const digitalChars = splitText(digitalTextRef.current);
      const advertisingChars = splitText(advertisingTextRef.current);

      // GSAP Animation Timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
        }
      });

      // Set initial states for DIGITAL letters
      gsap.set(digitalChars, { 
        opacity: 0, 
        y: 100, 
        rotationX: 90,
        scale: 0.3,
        transformOrigin: "center center"
      });
      
      // Set initial states for advertising letters
      gsap.set(advertisingChars, { 
        opacity: 0, 
        y: 50, 
        scale: 0.5,
        rotationY: 45
      });

      // Animate DIGITAL letters one by one
      tl.to(digitalChars, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.12,
          from: "start"
        }
      }, 0.5);

      // Add a glitch effect to DIGITAL
      tl.to(digitalChars, {
        duration: 0.08,
        x: () => gsap.utils.random(-8, 8),
        y: () => gsap.utils.random(-3, 3),
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.03
      }, 1.8);

      // Reset glitch
      tl.to(digitalChars, {
        duration: 0.3,
        x: 0,
        y: 0,
        ease: "power2.out"
      }, 2.2);

      // Animate advertising letters from center
      tl.to(advertisingChars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        ease: "power3.out",
        stagger: {
          each: 0.06,
          from: "center"
        }
      }, 2.3);

      // Add subtle floating animation to all letters
      tl.to([...digitalChars, ...advertisingChars], {
        duration: 4,
        y: "+=8",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.15,
          from: "random"
        }
      }, 3.5);

      // Add a backup timeout
      const backupTimeout = setTimeout(() => {
        if (onComplete) {
          console.log('Backup timeout triggered - completing loader');
          onComplete();
        }
      }, 6000);

      // Cleanup
      return () => {
        clearTimeout(backupTimeout);
        tl.kill();
      };
    }
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Galaxy background rotating */}
      <img 
        ref={galaxyRef}
        src="/1200px-Galaxy.png" 
        alt="Galaxy" 
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 object-contain opacity-30 pointer-events-none"
        style={{
          transformOrigin: 'center center',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* HUGE TEXT OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          {/* DIGITAL text */}
          <h1 
            ref={digitalTextRef}
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-black text-white leading-none mb-4 tracking-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            DIGITAL
          </h1>
          
          {/* advertising text */}
          <h2 
            ref={advertisingTextRef}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-white leading-none tracking-[0.4em] opacity-90"
            style={{
              textShadow: `
                0 0 15px rgba(255, 255, 255, 0.5),
                0 0 30px rgba(255, 255, 255, 0.3),
                0 0 45px rgba(255, 255, 255, 0.1)
              `,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
            }}
          >
            ADVERTISER
          </h2>
        </div>
      </div>
    
    </div>
  );
};

export default Loader;
