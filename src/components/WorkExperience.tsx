import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";


// Import images
import ads from '/src/assets/logos/Ads.png';
import clean from '/src/assets/logos/Cleaning.png';
import orion from '/src/assets/logos/Cargo .png';
import caucasus from '/src/assets/logos/Caucasus .png';
import dmt from '/src/assets/logos/DMT.png';
import hausberg from '/src/assets/logos/Hausberg.png';
import hydro from '/src/assets/logos/hg.png';
import infinity from '/src/assets/logos/Infinity .png';
import land from '/src/assets/logos/LAND.png';
import liva from '/src/assets/logos/Liva.png';
import nlc from '/src/assets/logos/NLC.png';
import saketuri from '/src/assets/logos/Saketuri .png';
import savse from '/src/assets/logos/Savse.png';
import sky from '/src/assets/logos/SkyHook.png';
import taxi from '/src/assets/logos/TaxiGeorgia.png';
import ter from '/src/assets/logos/Terra.png';
import topTour from '/src/assets/logos/TopTour.png';
import german from '/src/assets/logos/გერმანული.png';
import kaia from '/src/assets/logos/კაია.png';
import dento from '/src/assets/logos/Dento.png';
import dreamride from '/src/assets/logos/DreamRide.png';
import geo from '/src/assets/logos/GeoMart.png';
import patior from '/src/assets/logos/patio.png';
import lilat from '/src/assets/logos/Lilat.png';
import rom from '/src/assets/logos/RomClassic.png';
import smile from '/src/assets/logos/SmileSolutions.png';
import urbanx from '/src/assets/logos/UrbanX.png';
import win from '/src/assets/logos/Win-Win.png';     





export const WorkExperience = () => {
  return (
    <section className="relative min-h-screen w-full  bg-black-950">

    
      
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
      logo: ads,
      rotate: "6deg",
      top: "15%",
      left: "10%"
    },
    {
      company: "Cleaningomania",
      industry: "Cleaning Services",
      platform: "Google",
      stats: "+220% calls from search | Average CPC – 0.23$ | +5x booking intent",
      logo: clean,
      rotate: "0deg",
      top: "25%",
      left: "50%"
    },
    {
      company: "Orion Cargo",
      industry: "Logistics",
      platform: "Meta",
      stats: "-45% CPL | +3.2x quote requests | 60% lower CPM",
      logo: orion,
      rotate: "-20deg",
      top: "15%",
      left: "75%"
    },
    {
      company: "Caucasus Import",
      industry: "Construction Materials",
      platform: "Meta",
      stats: "500+ inbound inquiries | +280% engagement | 5.1% CTR",
      logo: caucasus,
      rotate: "12deg",
      top: "5%",
      left: "30%"
    },
    {
      company: "DMT",
      industry: "Smart Building Technology",
      platform: "Meta",
      stats: "+170% B2B leads | +210% landing page conversions | CPL: $0.70",
      logo: dmt,
      rotate: "-8deg",
      top: "35%",
      left: "15%"
    },
    {
      company: "Hausberg",
      industry: "Home Appliances",
      platform: "Meta",
      stats: "+4.5x sales | 7.2% CTR | 1400+ monthly link clicks | 700+ monthly messages",
      logo: hausberg,
      rotate: "18deg",
      top: "40%",
      left: "65%"
    },
    {
      company: "HydroGroup",
      industry: "Water Systems",
      platform: "Meta",
      stats: "+3x lead volume | $1.5 CPL | Hook rate ↑ from 13% to 29%",
      logo: hydro,
      rotate: "-15deg",
      top: "60%",
      left: "25%"
    },
    {
      company: "Infinity Solutions",
      industry: "Marketing Agency",
      platform: "Meta",
      stats: "+250% ad performance | 6.9% avg CTR | 80+ monthly leads",
      logo: infinity,
      rotate: "8deg",
      top: "45%",
      left: "80%"
    },
    {
      company: "Land Management",
      industry: "Land Survey & Legalization",
      platform: "Meta",
      stats: "220+ client messages | -40% cost per contact | 3x lead increase",
      logo: land,
      rotate: "-12deg",
      top: "70%",
      left: "40%"
    },
    {
      company: "Liva",
      industry: "Furniture",
      platform: "Meta",
      stats: "400+ product inquiries | 3.8x conversions | 9.1% CTR",
      logo: liva,
      rotate: "22deg",
      top: "20%",
      left: "85%"
    },
    {
      company: "NLC",
      industry: "Real Estate",
      platform: "Meta",
      stats: "230+ WhatsApp leads | +380% conversion | ROAS: 4.8x",
      logo: nlc,
      rotate: "-6deg",
      top: "55%",
      left: "70%"
    },
    {
      company: "Saketuri",
      industry: "Smart Locks",
      platform: "Meta",
      stats: "+320% lead growth | 5.6% CTR | CPL: $0.8",
      logo: saketuri,
      rotate: "14deg",
      top: "30%",
      left: "5%"
    },
    {
      company: "Savse Universami",
      industry: "Supermarket / Grocery",
      platform: "Meta",
      stats: "+300% store visits | -55% CPM | 900+ campaign interactions",
      logo: savse,
      rotate: "-18deg",
      top: "65%",
      left: "60%"
    },
    {
      company: "Sky Hook",
      industry: "Construction Equipment",
      platform: "Meta",
      stats: "+4x rental inquiries | $1.5 CPL | 6.4% CTR",
      logo: sky,
      rotate: "10deg",
      top: "75%",
      left: "20%"
    },
    {
      company: "Taxi Georgia",
      industry: "Driver Recruitment",
      platform: "Meta",
      stats: "50+ drivers hired | +500% ad response | CPL under $1 | 600+ monthly messages",
      logo: taxi,
      rotate: "-25deg",
      top: "50%",
      left: "45%"
    },
    {
      company: "Terra",
      industry: "Real Estate",
      platform: "Meta",
      stats: "300+ buyer messages | +4.2x lead gen | $1.6 per contact",
      logo: ter,
      rotate: "16deg",
      top: "10%",
      left: "60%"
    },
    {
      company: "TopTour",
      industry: "International Tourism",
      platform: "Meta",
      stats: "+3.5x bookings | CTR: 7.8% | 70% audience from EU market",
      logo: topTour,
      rotate: "-10deg",
      top: "80%",
      left: "75%"
    },
    {
      company: "German Household",
      industry: "Home Appliances",
      platform: "Meta",
      stats: "5x online orders | 1200+ monthly messages | CPL ↓ 60%",
      logo: german,
      rotate: "20deg",
      top: "35%",
      left: "35%"
    },
    {
      company: "KAIA",
      industry: "Ventilation Systems",
      platform: "Meta",
      stats: "3x increase in B2B leads | 4.7% CTR | -45% CP",
      logo: kaia,
      rotate: "-14deg",
      top: "85%",
      left: "55%"
    },
    {
      company: "Dento Group",
      industry: "Dental Clinic",
      platform: "Google",
      stats: "+3x calls via Google Ads | $0.5 CPC | CTR ↑ to 13.2%",
      logo: dento,
      rotate: "7deg",
      top: "5%",
      left: "45%"
    },
    {
      company: "Dreamride",
      industry: "Motorcycle Gear",
      platform: "Google",
      stats: "+5.5x conversions | ROAS 3.1x | -60% CPC with shopping ads",
      logo: dreamride,
      rotate: "-11deg",
      top: "90%",
      left: "10%"
    },
    {
      company: "Geo Mart",
      industry: "Electronics E-commerce",
      platform: "Google",
      stats: "3800+ clicks/month | 5.3% CTR | +250% traffic growth",
      logo: geo,
      rotate: "15deg",
      top: "25%",
      left: "90%"
    },
    {
      company: "PatiorArt",
      industry: "Print & Marketing",
      platform: "Google",
      stats: "+3x form submissions | CTR: 8.7% | High-converting branded traffic",
      logo: patior,
      rotate: "-9deg",
      top: "65%",
      left: "85%"
    },
    {
      company: "Lilat Flowers",
      industry: "Flower Shop",
      platform: "Google",
      stats: "+4x call volume | $0.15 avg. CPC | +4.8x conversion rate",
      logo: lilat,
      rotate: "11deg",
      top: "45%",
      left: "5%"
    },
    {
      company: "RomClassic",
      industry: "Furniture",
      platform: "Google",
      stats: "+170% search conversions | 11.1% CTR | CPL ↓ 55%",
      logo: rom,
      rotate: "-16deg",
      top: "75%",
      left: "65%"
    },
    {
      company: "Smile Solutions",
      industry: "Dental Clinic",
      platform: "Google",
      stats: "+390% appointment leads | 6.5% CTR | CPC: $0.4",
      logo: smile,
      rotate: "9deg",
      top: "90%",
      left: "40%"
    },
    {
      company: "UrbanX",
      industry: "Construction & Architecture",
      platform: "Google",
      stats: "+160% contact requests | $1.10 CPL | +3x qualified traffic",
      logo: urbanx,
      rotate: "17deg",
      top: "55%",
      left: "25%"
    },
    {
      company: "Win-Win",
      industry: "Salon Equipment E-commerce",
      platform: "Google",
      stats: "+5.1x purchase intent | Smart campaigns ROAS: 2.8x | CTR: 6.2%",
      logo: win,
      rotate: "-7deg",
      top: "30%",
      left: "75%"
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
        <div className="flex items-center gap-1 bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-[9px] font-medium">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
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
        <div className="flex items-center gap-1 bg-blue-500 text-white px-1.5 py-0.5 rounded-full text-[9px] font-medium">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
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
        "drag-elements absolute w-56 h-36 bg-neutral-900/95 backdrop-blur-sm p-3 rounded-xl border border-neutral-700/50 shadow-2xl cursor-grab active:cursor-grabbing hover:border-green-500/30 transition-colors"
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, rotate: 0 }}
    >
      {/* Header with Logo and Badge */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          {logo.startsWith('/') || logo.startsWith('http') ? (
            <img 
              src={logo} 
              alt={`${company} logo`}
              className="w-8 h-8 rounded object-cover"
              onError={(e) => {
                // Replace with fallback emoji on error
                const target = e.currentTarget;
                const fallback = document.createElement('span');
                fallback.textContent = '🚗';
                fallback.className = 'text-2xl';
                target.parentNode?.replaceChild(fallback, target);
              }}
            />
          ) : (
            <span className="text-2xl">{logo}</span>
          )}
          <div>
            <h3 className="text-white font-bold text-xs leading-tight">
              {company}
            </h3>
            <p className="text-neutral-400 text-[10px]">
              {industry}
            </p>
          </div>
        </div>
        {getPlatformBadge(platform)}
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-800/50 rounded-lg p-2 mt-auto">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-green-400 text-xs">📈</span>
          <span className="text-green-400 text-[9px] font-medium uppercase tracking-wide">Performance</span>
        </div>
        <p className="text-white text-[10px] leading-relaxed font-medium">
          {stats}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
