import React, { type ReactNode } from 'react';
import { cn } from './lib/utils';
import { Tiles } from './tiles';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin
} from 'lucide-react';
import ScrambleHover from './cuicui/other/text-animation/scramble-hover/scramble';
import Contact from './components/Contact';
import TechnicalSkills from './components/TechnicalSkills';
import MyWorks from './components/MyWorks';

// Import images
import nikaImg from './assets/avatar.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';

interface HeroProps {
  onContentReady: () => void;
}






export const Example = () => (
  <AnimatedGridBackgroundSection>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center px-4 lg:px-6 hero-entrance py-8 lg:py-0">
      {/* Text Content Section */}
      <div className="space-y-4 sm:space-y-6 hero-content-left order-2 lg:order-1">
        <div className="space-y-3 sm:space-y-4">
        
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          <ScrambleHover
            text="Graphic Designer"
            scrambleSpeed={40}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={false}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-green-400 font-semibold leading-tight"
            characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
          />
        </div>
        
        <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed">
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            Hi, I'm Andria Ochigava, a <span className="text-green-400 font-semibold">junior graphic designer passionate about the power of visual communication</span>. Graphic design is like being a visual storyteller—transforming ideas into compelling visuals that speak directly to people's hearts and minds.
          </p>
          
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            This field fascinates me because it sits at the intersection of art and strategy, where creativity meets problem-solving. Whether it's crafting a brand identity, designing user interfaces, or creating marketing materials, every project is a puzzle waiting to be solved through thoughtful design.
          </p>
          
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            I'm excited about new opportunities to grow, collaborate, and create designs that make a real impact. Ready to bring fresh ideas and enthusiasm to your next projects!
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text leading-relaxed">
            Let's create something amazing together.
          </p>
        </div>

      </div>

      {/* Image Content Section - Improved Mobile Responsiveness */}
      <div className="relative hero-content-right order-1 lg:order-2 mb-8 lg:mb-0">
        <div className="relative z-10">
          {/* Profile Image - Better mobile sizing */}
          <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-green-500/30 overflow-hidden group hover:border-green-500/50 transition-all duration-300">
              {/* Test Image */}
              <img 
                src={nikaImg}
                alt="Nikoloz Gvarmiani - Digital Marketing Specialist"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Design Tool Cards - Graphic Designer Daily Tools */}
          
          {/* Image Card 1 (Top-Right) */}
          <motion.div 
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/50 rounded-xl p-2 sm:p-3"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.15,
              borderColor: "rgba(239, 68, 68, 0.8)",
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            transition={{ 
              delay: 1.5,
              duration: 0.8,
              type: "spring",
              stiffness: 130,
              damping: 15
            }}
          >
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
            >
              <img 
                src={img1} 
                alt="Info 1" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>
          
          {/* Image Card 2 (Top-Left) */}
          <motion.div 
            className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/50 rounded-xl p-2 sm:p-3"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ 
              scale: 1.15,
              borderColor: "rgba(147, 51, 234, 0.8)",
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
            }}
            transition={{ 
              delay: 2.2,
              duration: 0.8,
              type: "spring",
              stiffness: 130,
              damping: 15
            }}
          >
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7, duration: 0.7 }}
            >
              <img 
                src={img2} 
                alt="Info 2" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Image Card 3 (Bottom-Left) */}
          <motion.div 
            className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/50 rounded-xl p-2 sm:p-3"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.15,
              borderColor: "rgba(59, 130, 246, 0.8)",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ 
              delay: 2.9,
              duration: 0.8,
              type: "spring",
              stiffness: 130,
              damping: 15
            }}
          >
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
            >
              <img 
                src={img3} 
                alt="Info 3" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Image Card 4 (Bottom-Right) */}
          <motion.div 
            className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/50 rounded-xl p-2 sm:p-3"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ 
              scale: 1.15,
              borderColor: "rgba(52, 211, 153, 0.8)",
              boxShadow: "0 20px 40px rgba(52, 211, 153, 0.4)"
            }}
            transition={{ 
              delay: 3.6,
              duration: 0.8,
              type: "spring",
              stiffness: 130,
              damping: 15
            }}
          >
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 4.1, duration: 0.8 }}
            >
              <img 
                src={img4} 
                alt="Info 4" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decoration - Adjusted for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-green-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-500/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
      </div>
    </div>
  </AnimatedGridBackgroundSection>
)

const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={
        'w-full min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-8 sm:py-12 lg:py-20'
      }
    >
      <div className={'w-full h-full relative z-20 text-white px-2 sm:px-0'}>{children}</div>
      {/* Grid tiles - Less intrusive on mobile */}
      <div className={'absolute top-0 left-0 h-full w-full z-10 opacity-40 sm:opacity-60 lg:opacity-100'}>
        <Tiles rows={30} cols={12} />
      </div>
      {/* Additional glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/90 z-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-green-500/5 rounded-full blur-3xl z-15 pointer-events-none animate-pulse" />
    </div>
  )
}

const Hero: React.FC<HeroProps> = ({ onContentReady }) => {
  React.useEffect(() => {
    onContentReady();
  }, [onContentReady]);

  return (
    <div className="bg-black">
      {/* Main Hero Section - Made shorter */}
      <div className="h-screen">
        <Example />
       
      </div>
      
      <TechnicalSkills />
      
      <MyWorks />
      
      <Contact />
      
       
     
     
  
    
      

     
    </div>
  );
};

export default Hero;



