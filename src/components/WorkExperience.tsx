import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const WorkExperience = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black-950">

    
      
      {/* Background Work Text */}
      <div className="absolute inset-0 grid place-content-center">
        <h3 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
          MY WORKS<span className="text-green-500">.</span>
        </h3>
      </div>
      
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const workData = [
    {
      company: "Auto Detail Service",
      industry: "Auto Services",
      platform: "Meta",
      stats: "1200+ monthly messages | 8.5% CTR | +4x lead growth",
      logo: "/src/assets/logos/Ads.png", // Using emoji as fallback since image doesn't exist
      rotate: "6deg",
      top: "15%",
      left: "10%"
    },
     {
      company: "Cleaningomania",
      industry: "Cleaning Services",
      platform: "Google",
      stats: "+220% calls from search | Average CPC – 0.23$ | +5x booking intent",
      logo: "/src/assets/logos/Cleaning.png", // Using emoji as fallback since image doesn't exist
      rotate: "0deg",
      top: "25%",
      left: "50%"
    },
   
  ];

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {workData.map((item, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          company={item.company}
          industry={item.industry}
          platform={item.platform}
          stats={item.stats}
          logo={item.logo}
          rotate={item.rotate}
          top={item.top}
          left={item.left}
        />
      ))}
    </div>
  );
};

const Card = ({ 
  containerRef, 
  company,
  industry,
  platform,
  stats,
  logo,
  top, 
  left, 
  rotate
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  company: string;
  industry: string;
  platform: string;
  stats: string;
  logo: string;
  top: string;
  left: string;
  rotate: string;
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  const getPlatformBadge = (platform: string) => {
    if (platform === "Google") {
      return (
        <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" fill="#FFF"/>
          </svg>
          Meta
        </div>
      );
    }
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-72 h-48 bg-neutral-900/95 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50 shadow-2xl cursor-grab active:cursor-grabbing hover:border-green-500/30 transition-colors"
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, rotate: 0 }}
    >
      {/* Header with Logo and Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {logo.startsWith('/') || logo.startsWith('http') ? (
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
              <img 
                src={logo} 
                alt={`${company} logo`}
                className="w-8 h-8 rounded object-cover"
                onError={(e) => {
                  // Replace with fallback emoji on error
                  const target = e.currentTarget;
                  const fallback = document.createElement('span');
                  fallback.textContent = '🚗';
                  fallback.className = 'text-xl';
                  target.parentNode?.replaceChild(fallback, target);
                }}
              />
            </div>
          ) : (
            <span className="text-2xl">{logo}</span>
          )}
          <div>
            <h3 className="text-white font-bold text-sm leading-tight">
              {company}
            </h3>
            <p className="text-neutral-400 text-xs">
              {industry}
            </p>
          </div>
        </div>
        {getPlatformBadge(platform)}
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-800/50 rounded-lg p-3 mt-auto">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-green-400 text-sm">📈</span>
          <span className="text-green-400 text-xs font-medium uppercase tracking-wide">Performance</span>
        </div>
        <p className="text-white text-xs leading-relaxed font-medium">
          {stats}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
