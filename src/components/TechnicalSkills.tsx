import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

// Import skill icons
import photoshopIcon from '../assets/skill/Adobe-Photoshop-Logo-2019-2020.png';
import illustratorIcon from '../assets/skill/illustrator-Logo-2015.png';
import indesignIcon from '../assets/skill/Adobe-InDesign-Logo.png';
import bridgeIcon from '../assets/skill/Adobe_Bridge-Logo.wine.png';
import canvaIcon from '../assets/skill/Canva-Symbol.png';
import figmaIcon from '../assets/skill/Figma-logo.svg.png';
import corelIcon from '../assets/skill/coreldraw-logo_brandlogos.net_96dfz-512x512.png';
import uxIcon from '../assets/skill/ux-ui-logo.svg';


type CardType = {
  title: string;
  content: ReactNode;
};

const cardData: CardType[] = [
  {
    title: "Photoshop",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={photoshopIcon} 
          alt="Adobe Photoshop" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Illustrator",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={illustratorIcon} 
          alt="Adobe Illustrator" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "CorelDRAW",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={corelIcon} 
          alt="CorelDRAW" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Bridge",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={bridgeIcon} 
          alt="Adobe Bridge" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "InDesign",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={indesignIcon} 
          alt="Adobe InDesign" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "UX/UI",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={uxIcon} 
          alt="UX/UI Design" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Figma",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={figmaIcon} 
          alt="Figma" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Canva",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <img 
          src={canvaIcon} 
          alt="Canva" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    ),
  },
];

function AnimatedCardVariant1() {
  return (
    <div className="w-full">
      {/* Mobile: 2-row grid layout - fully visible cards */}
      <div className="sm:hidden">
        {/* First row: 4 cards */}
        <div className="grid grid-cols-4 gap-1 mb-2 px-1">
          {cardData.slice(0, 4).map((card) => (
            <Card
              className={cn(
                "transform-gpu hover:rotate-0 hover:scale-110 transition-all duration-300 flex-shrink-0",
                "rotate-0", // No rotation on mobile for better fit
              )}
              content={card.content}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
        {/* Second row: 4 cards */}
        <div className="grid grid-cols-4 gap-1 px-1">
          {cardData.slice(4, 8).map((card) => (
            <Card
              className={cn(
                "transform-gpu hover:rotate-0 hover:scale-110 transition-all duration-300 flex-shrink-0",
                "rotate-0", // No rotation on mobile for better fit
              )}
              content={card.content}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop: Original single row with rotation */}
      <div className="hidden sm:flex justify-center items-center gap-0.5 px-4">
        {cardData.map((card, index) => (
          <Card
            className={cn(
              "transform-gpu hover:rotate-0 hover:scale-110 transition-all duration-300 flex-shrink-0",
              index % 2 === 0 ? "rotate-6" : "-rotate-6",
            )}
            content={card.content}
            key={card.title}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  title,
  content,
  className,
}: Readonly<{
  title: string;
  content: ReactNode;
  className: string;
}>) {
  const getBrandHoverColor = () => {
    return "hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20";
  };

  return (
    <div
      className={cn(
        "group flex h-14 w-full sm:h-24 sm:w-16 md:h-32 md:w-20 lg:h-36 lg:w-24 transform-gpu flex-col rounded-lg border border-gray-600/30 bg-gray-800/60 backdrop-blur-sm p-1 sm:p-2 md:p-3 lg:p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl",
        getBrandHoverColor(),
        className,
      )}
    >
      <div className="flex flex-1 items-center justify-center">{content}</div>
      <div className="space-y-0.5">
        <p className="font-semibold text-gray-200 text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs text-center leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}

const TechnicalSkills: React.FC = () => {
  return (
    <motion.section 
      className="w-full bg-black py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-green-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-500/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-2 border-orange-500/10 rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Design tool icons background */}
        <div className="absolute top-1/4 left-5 opacity-5">
          <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-5 opacity-5">
          <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-5">
          <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,7.87 17.26,7.87H15.11L12.26,16.88C12,17.54 12,17.76 12.3,17.76H12.94L12.75,18.55H7.72L7.91,17.76H8.31C8.54,17.76 8.74,17.6 8.85,17.39L11.7,8.38H9.55C8.87,8.38 8.56,8.6 8.15,9.34L7.19,9.08L8.35,4.7H18.5M12.64,2A2,2 0 0,1 14.64,4H9.36A2,2 0 0,1 11.36,2H12.64Z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-5">
          <svg className="w-14 h-14 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9,12L7,22H9L11,16H13L15,22H17L15,12H9M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9H18L18.5,7H15.5L16,9H3V11H16.5L17.5,7H18.5L18,9H21V11H18L17,22H15L16,11H8L7,22H5L6,11H3V9H6L7,7H10L9,9H21V7"/>
          </svg>
        </div>
        
        {/* Floating design elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-500/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/2 left-1/5 w-3 h-3 bg-orange-500/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              TECHNICAL <span className="text-green-500">SKILLS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
             Platforms and tools I work with to create impactful visual designs
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="w-full max-w-5xl mx-auto overflow-visible relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedCardVariant1 />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnicalSkills;