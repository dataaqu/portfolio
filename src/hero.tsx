import React, { useEffect, useState, type ReactNode } from 'react';
import { cn } from './lib/utils';
import { Tiles } from './tiles';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin
} from 'lucide-react';
import ScrambleHover from './cuicui/other/text-animation/scramble-hover/scramble';
import AnimatedChartSection from './components/AnimatedChartSection';

// Import images
import googleImg from './assets/google.jpg';
import fbImg from './assets/fb.jpg';
import analyzImg from './assets/analyz.jpg';
import roiImg from './assets/roi.jpg';
import nikaImg from './assets/nika.jpeg';

interface HeroProps {
  onContentReady: () => void;
}



// Data for the feature component
const portfolioData = [
  {
    title: "Google Ads Campaign Strategy",
    content:
      "Develop comprehensive Google Ads campaigns that target the right audience, optimize for conversions, and maximize your return on ad spend with data-driven insights.",
    srcImage: googleImg,
  },
  {
    title: "Meta Advertising Excellence",
    content:
      "Create high-performing Facebook and Instagram ad campaigns that engage your target audience and drive meaningful conversions across all Meta platforms.",
    srcImage: fbImg,
  },
  {
    title: "Performance Analytics & Optimization",
    content:
      "Monitor, analyze, and optimize your advertising campaigns with detailed performance metrics and continuous A/B testing to ensure maximum efficiency.",
    srcImage: analyzImg,
  },
  {
    title: "ROI-Focused Campaign Management",
    content:
      "Manage your advertising budget strategically to achieve the highest return on investment while scaling your business growth sustainably.",
    srcImage: roiImg,
  },
];

// Feature component for portfolio showcase
function PortfolioFeatureComponent() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % portfolioData.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-20 text-center">
        <p className="mb-2 font-medium text-neutral-400 text-sm uppercase tracking-wider">
          My Expertise
        </p>
        <h2 className="mb-4 font-semibold text-3xl text-white tracking-tighter">
          Digital Advertising Services That Drive Results
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {portfolioData.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div className="relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]">
            {portfolioData.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : "",
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: portfolioData.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-green-500/20 bg-gradient-to-b from-green-900/10 to-blue-900/5 shadow-lg"
          : "scale-90 border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <p className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-green-500/20 text-green-400 font-medium">
          {number}
        </p>
        <h2 className="text-left font-medium text-white text-xl">
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-300 transition-all duration-500",
          isOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <p className="p-4 text-lg leading-relaxed">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-neutral-700">
            <div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-100"
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Example = () => (
  <AnimatedGridBackgroundSection>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 hero-entrance">
      {/* Text Content Section */}
      <div className="space-y-6 hero-content-left">
        <div className="space-y-4">
        
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          <ScrambleHover
            text="Google Ads Specialist & Meta Certified Advertiser"
            scrambleSpeed={40}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={false}
            className="text-md md:text-3xl text-green-400 font-semibold"
            characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
          />
        </div>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p className="text-base md:text-lg">
            Hi, I'm Nikoloz Gvarmiani, a <span className="text-green-400 font-semibold">results-driven Google Ads Specialist and Meta Certified Advertiser</span> with a sharp focus on performance marketing and creative strategy. With hands-on experience across local and international brands, I build digital campaigns that don't just run—they convert.
          </p>
          
          <p className="text-base md:text-lg">
            From reducing cost-per-result by 80% to scaling lead generation by 1,200%+, I know how to transform data into action. Whether it's Google Search, YouTube, Meta Ads, or advanced analytics with GA4 and GTM, I create data-backed campaigns that speak to the right audience, at the right time, with the right message.
          </p>
          
          <p className="text-base md:text-lg">
            With a foundation in Digital Marketing studies at BTU, top rankings in Skillwill Neo, and real-world experience at companies like Tegeta Holding, Gepra, and Infinity Solutions, I bring the perfect balance of strategy, creativity, and execution.
          </p>
          
          <p className="text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
            Let's turn clicks into conversions.
          </p>
        </div>

        {/* Platform Expertise Cards */}
        <div className="pt-8 w-full">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Platform Expertise
          </h3>
          <div className="w-full max-w-5xl mx-auto overflow-visible">
            <AnimatedCardVariant1 />
          </div>
        </div>
      </div>

      {/* Image Content Section */}
      <div className="relative hero-content-right">
        <div className="relative z-10">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
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

          {/* Floating Stats Cards */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(34, 197, 94, 0.6)",
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)"
            }}
            transition={{ 
              delay: 1.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="text-green-400 font-bold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.5 }}
            >
              80%
            </motion.div>
            <motion.div 
              className="text-gray-300 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              Cost Reduction
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(59, 130, 246, 0.6)",
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
            }}
            transition={{ 
              delay: 3.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="text-blue-400 font-bold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.5 }}
            >
              1200%+
            </motion.div>
            <motion.div 
              className="text-gray-300 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.5 }}
            >
              Lead Growth
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decoration */}
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
        'w-full h-full min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20'
      }
    >
      <div className={'w-full h-full relative z-20 text-white'}>{children}</div>
      <div className={'absolute top-0 left-0 h-full w-full z-10'}>
        <Tiles rows={30} cols={12} />
      </div>
      {/* Additional glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/90 z-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl z-15 pointer-events-none animate-pulse" />
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
      
      {/* Animated Chart Section */}
      <AnimatedChartSection />
      
      {/* Portfolio Feature Section */}
      <div className="min-h-screen bg-black">
        <PortfolioFeatureComponent />
      </div>
    </div>
  );
};

export default Hero;



const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const EtsyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#F16521"/>
    <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">E</text>
  </svg>
);

const YandexIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#FFCC00"/>
    <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">Y</text>
  </svg>
);

type CardType = {
  title: string;
  content: ReactNode;
};

const cardData: CardType[] = [
  {
    title: "Google",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <GoogleIcon className="size-5" />
     
      </div>
    ),
  },
  {
    title: "Facebook",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Facebook className="size-5 text-[#1877F2]" />
       
      </div>
    ),
  },
  {
    title: "Instagram",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Instagram className="size-5 text-[#E4405F]" />
      
      </div>
    ),
  },
  {
    title: "TikTok",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <TikTokIcon className="size-5 text-[#FF0050]" />
        
      </div>
    ),
  },
  {
    title: "LinkedIn",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Linkedin className="size-5 text-[#0A66C2]" />
       
      </div>
    ),
  },
  {
    title: "Etsy",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <EtsyIcon className="size-5" />
       
      </div>
    ),
  },
  {
    title: "Yandex",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <YandexIcon className="size-5" />
       
      </div>
    ),
  },
];

function AnimatedCardVariant1() {
  return (
    <div className="flex justify-center items-center gap-0.5 max-w-full overflow-visible px-4">
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
  const getBrandHoverColor = (title: string) => {
    switch (title) {
      case "Google":
        return "hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5";
      case "Facebook":
        return "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/5";
      case "Instagram":
        return "hover:border-[#E4405F]/50 hover:bg-[#E4405F]/5";
      case "TikTok":
        return "hover:border-[#FF0050]/50 hover:bg-[#FF0050]/5";
      case "LinkedIn":
        return "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5";
      case "Etsy":
        return "hover:border-[#F16521]/50 hover:bg-[#F16521]/5";
      case "Yandex":
        return "hover:border-[#FFCC00]/50 hover:bg-[#FFCC00]/5";
      default:
        return "hover:border-green-500/30 hover:bg-gray-700/60";
    }
  };

  return (
    <div
      className={cn(
        "group flex h-24 w-16 transform-gpu flex-col rounded-lg border border-gray-600/30 bg-gray-800/60 backdrop-blur-sm p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl",
        getBrandHoverColor(title),
        className,
      )}
    >
      <div className="flex flex-1 items-center justify-center">{content}</div>
      <div className="space-y-0.5">
        <p className="font-semibold text-gray-200 text-[9px] text-center leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}
