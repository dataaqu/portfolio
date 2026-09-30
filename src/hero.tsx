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
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

// Import images
import nikaImg from './assets/nika.jpeg';
import googleAdsOverviewImg from './assets/google/google-ads-overview.png';
import googleAdsCampaigns1Img from './assets/google/google-ads-campaigns-1.png';
import googleAdsCampaigns2Img from './assets/google/google-ads-campaigns-2.png';
import metaEcomAugustImg from './assets/meta/meta-ecom-august.png';
import metaEcomJuneImg from './assets/meta/meta-ecom-june.png';
import metaAppCampaignsImg from './assets/meta/meta-app-campaigns.png';
import ga4SalesOverviewImg from './assets/analytics/ga4-sales-overview.png';
import ga4TrafficAugustImg from './assets/analytics/ga4-traffic-august.png';
import ga4TrafficJulyImg from './assets/analytics/ga4-traffic-july.png';

interface HeroProps {
  onContentReady: () => void;
}



// Data for the feature component
const portfolioData = [
  {
    title: "Google Ads Campaign Strategy",
    content:
      "Develop comprehensive Google Ads campaigns that target the right audience, optimize for conversions, and maximize your return on ad spend with data-driven insights.",
    images: [googleAdsOverviewImg, googleAdsCampaigns1Img, googleAdsCampaigns2Img],
  },
  {
    title: "Meta Advertising Excellence",
    content:
      "Create high-performing Facebook and Instagram ad campaigns that engage your target audience and drive meaningful conversions across all Meta platforms.",
    images: [metaEcomAugustImg, metaEcomJuneImg, metaAppCampaignsImg],
  },
  {
    title: "Performance Analytics & Optimization",
    content:
      "Monitor, analyze, and optimize your advertising campaigns with detailed performance metrics and continuous A/B testing to ensure maximum efficiency.",
    images: [ga4SalesOverviewImg, ga4TrafficAugustImg, ga4TrafficJulyImg],
  }
];

// Each slide in a carousel stays on screen this long; single images keep the original 10s
const SLIDE_DURATION = 4000;
const MIN_FEATURE_DURATION = 10000;
const getFeatureDuration = (index: number) =>
  Math.max(MIN_FEATURE_DURATION, portfolioData[index].images.length * SLIDE_DURATION);

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
    if (timer > getFeatureDuration(featureOpen)) {
      setFeatureOpen((prev) => (prev + 1) % portfolioData.length);
      setTimer(0);
    }
  }, [timer, featureOpen]);

  const activeImages = portfolioData[featureOpen].images;
  const activeSlide = Math.min(
    activeImages.length - 1,
    Math.floor(timer / (getFeatureDuration(featureOpen) / activeImages.length)),
  );

  // The frame takes the active screenshot's own aspect ratio so the image fills it with no empty bands
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});
  const activeRatio = aspectRatios[activeImages[activeSlide]] ?? 16 / 10;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
        <p className="mb-2 font-medium text-neutral-400 text-xs sm:text-sm uppercase tracking-wider">
          My Expertise
        </p>
        <h2 className="mb-4 font-semibold text-2xl sm:text-3xl text-white tracking-tighter px-2">
          Digital Advertising Services That Drive Results
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:gap-8 lg:grid-cols-2 min-h-[600px] sm:min-h-[500px] lg:min-h-[600px]">
        <div className="space-y-6 sm:space-y-6 h-fit">
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
                loadingWidthPercent={featureOpen === index ? (timer / getFeatureDuration(index)) * 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full mt-4 lg:mt-0">
          <div
            className="relative w-full overflow-hidden rounded-lg transition-[aspect-ratio] duration-500"
            style={{ aspectRatio: activeRatio }}
          >
            {portfolioData.map((item, index) => (
              <div
                className={cn(
                  "absolute h-full w-full transform-gpu overflow-hidden rounded-lg bg-neutral-900 transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : "",
                )}
                key={item.title}
                style={{ zIndex: portfolioData.length - index }}
              >
                {item.images.map((src, slideIndex) => (
                  <img
                    alt={`${item.title} ${slideIndex + 1}`}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                      (featureOpen === index ? activeSlide : 0) === slideIndex ? "opacity-100" : "opacity-0",
                    )}
                    key={src}
                    onLoad={(e) => {
                      const { naturalWidth, naturalHeight } = e.currentTarget;
                      if (naturalWidth && naturalHeight) {
                        setAspectRatios((prev) => ({ ...prev, [src]: naturalWidth / naturalHeight }));
                      }
                    }}
                    src={src}
                  />
                ))}
              </div>
            ))}
            {activeImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-black/60 px-3 py-2 backdrop-blur-sm">
                {activeImages.map((src, slideIndex) => (
                  <button
                    aria-label={`Show slide ${slideIndex + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      activeSlide === slideIndex ? "w-6 bg-green-400" : "w-2 bg-white/50 hover:bg-white/80",
                    )}
                    key={src}
                    onClick={() => setTimer(slideIndex * (getFeatureDuration(featureOpen) / activeImages.length))}
                    type="button"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      

      <div className="text-center mt-16 mb-8 px-4">
        <div className="relative">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
            My Small Freelance <span className="text-green-500">Projects</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore my partnerships and successful campaigns across diverse industries. 
            Here you can see the real impact of data-driven advertising strategies.
          </p>
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
          ? "h-40 sm:h-32 border-green-500/20 bg-gradient-to-b from-green-900/10 to-blue-900/5 shadow-lg"
          : "h-20 sm:h-20 scale-90 border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-3 sm:gap-4 p-4 sm:p-4">
        <p className="inline-flex size-8 sm:size-8 shrink-0 items-center justify-center rounded-md bg-green-500/20 text-green-400 font-medium text-sm sm:text-base">
          {number}
        </p>
        <h2 className="text-left font-medium text-white text-sm sm:text-lg lg:text-xl leading-tight">
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-300 transition-all duration-500",
          isOpen ? "opacity-100 h-28 sm:h-20" : "opacity-0 h-0",
        )}
      >
        <p className="px-4 sm:px-4 pb-3 text-sm sm:text-sm leading-relaxed">{content}</p>
        <div className="w-full px-4 sm:px-4 pb-2">
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
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start px-4 lg:px-6 hero-entrance py-8 lg:py-0">
      {/* Text Content Section */}
      <div className="space-y-4 sm:space-y-6 hero-content-left order-2 lg:order-1">
        <div className="space-y-3 sm:space-y-4">
        
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          <ScrambleHover
            text="Digital Marketing Specialist & Media Buyer"
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
            Hi, I’m Nikoloz Gvarmiani, a <span className="text-green-400 font-semibold">performance-focused Digital Marketing Specialist and Media Buyer</span> with hands-on experience managing e-commerce and lead generation campaigns across local and international markets.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            My core expertise is in Meta Ads, Google Ads, Criteo, and performance marketing, with experience managing campaigns from strategy and media planning to execution, optimization, attribution, and reporting. I’ve worked with e-commerce brands generating $2M+ in monthly revenue and managed advertising spend of $700K–$800K+ per month across multiple channels.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            I focus on the full customer journey - from audience research, creative strategy, and campaign structure to funnels, landing pages, tracking, attribution, and conversion optimization. I work with tools including GA4, Google Tag Manager, Northbeam, Meta Pixel/CAPI, and platform analytics to make decisions based on real performance data.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            My experience includes working with international e-commerce brands across the US and UK markets, as well as local businesses and agencies. I’ve also worked as an Advertising Lead, managing a team of 5 and overseeing projects end-to-end, from client communication and strategy to execution and reporting.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            I combine analytical thinking with creative strategy, using data to understand what works, why it works, and how to scale it sustainably.
          </p>

          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            I’m currently pursuing a Master’s degree in Data-Driven Digital Marketing, further strengthening my expertise in analytics, performance marketing, and data-driven decision-making.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text leading-relaxed">
            My goal is simple: build and scale advertising systems that generate measurable business growth, not just clicks and impressions.
          </p>
        </div>
      </div>

      {/* Image Content Section - Improved Mobile Responsiveness */}
      <div className="hero-content-right order-1 lg:order-2 mb-8 lg:mb-0 lg:pt-12">
        <div className="relative">
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

          {/* Floating Stats Cards - Better mobile positioning */}
          <motion.div 
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 sm:p-3 min-w-[80px] sm:min-w-[90px]"
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
              className="text-green-400 font-bold text-sm sm:text-base md:text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.5 }}
            >
              $2M+
            </motion.div>
            <motion.div 
              className="text-gray-300 text-[9px] sm:text-[10px] md:text-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              Monthly Revenue
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 sm:p-3 min-w-[80px] sm:min-w-[90px]"
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
              className="text-blue-400 font-bold text-sm sm:text-base md:text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.5 }}
            >
              3.8x+
            </motion.div>
            <motion.div 
              className="text-gray-300 text-[9px] sm:text-[10px] md:text-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.5 }}
            >
              MER
            </motion.div>
          </motion.div>

          {/* New Stats Cards */}
          <motion.div 
            className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 sm:p-3 min-w-[80px] sm:min-w-[90px]"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(168, 85, 247, 0.6)",
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)"
            }}
            transition={{ 
              delay: 4.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="text-purple-400 font-bold text-sm sm:text-base md:text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.9, duration: 0.5 }}
            >
              $800K+
            </motion.div>
            <motion.div 
              className="text-gray-300 text-[9px] sm:text-[10px] md:text-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.1, duration: 0.5 }}
            >
              Monthly Ad Spend
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-black/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2 sm:p-3 min-w-[80px] sm:min-w-[90px]"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(249, 115, 22, 0.6)",
              boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)"
            }}
            transition={{ 
              delay: 5.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="text-orange-400 font-bold text-sm sm:text-base md:text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.1, duration: 0.5 }}
            >
              US + UK
            </motion.div>
            <motion.div 
              className="text-gray-300 text-[9px] sm:text-[10px] md:text-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.3, duration: 0.5 }}
            >
              Markets Managed
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decoration - Adjusted for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-green-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-500/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
        </div>

        {/* Platform Expertise Cards */}
        <div className="relative z-20 pt-10 sm:pt-12 lg:pt-16 w-full">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 sm:mb-4 lg:mb-6 text-center">
            Platform Expertise
          </h3>
          <div className="w-full max-w-5xl mx-auto overflow-visible relative">
            <AnimatedCardVariant1 />
          </div>
        </div>
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
      <div className="min-h-screen">
        <Example />
       
      </div>
      
    
      <AnimatedChartSection />
         <PortfolioFeatureComponent />
      
      <WorkExperience />
      
      <Contact />
      
       
     
     
  
    
      

     
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

const DV360Icon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 2192.7 2428.1" className={className} fill="currentColor">
    <g>
      <path fill="#81C995" d="M1730.6,949.3c142.5-86.5,328.1-41.1,414.5,101.4c86.5,142.5,41.1,328.1-101.4,414.5
        c-3.8,2.3-7.6,4.5-11.4,6.6L460.2,2377.1c-142.5,86.5-328.1,41.1-414.6-101.4c-86.5-142.5-41.1-328.1,101.4-414.6
        c3.8-2.3,7.6-4.5,11.4-6.6L1730.6,949.3z"/>
      <path fill="#34A853" d="M601,303.7C601.7,137.4,467.4,1.9,301.1,1.2c-21.4-0.1-42.7,2.1-63.7,6.5C96.5,42.3-2,169.5,0,314.7v1798.1
        l600.4,10.9L601,303.7z"/>
      <path fill="#5BB974" d="M1737.4,1472.9c145.3,75.3,324.1,27.1,411.9-111.1c84.4-142,37.7-325.6-104.3-410c-1.1-0.6-2.1-1.2-3.2-1.9
        L459.2,43C318.3-42.1,135,3.1,49.8,144c-2.1,3.5-4.2,7.1-6.2,10.7C-40,297.8,8.2,481.7,151.3,565.4c1,0.6,2,1.1,3,1.7
        L1737.4,1472.9z"/>
      <path fill="#81C995" d="M2031.4,1475L600.5,2274.3v-686.6l1135.4-633.1c150.5-83.4,340.2-29,423.6,121.6c7.8,14,14.4,28.6,19.9,43.6
        C2235.8,1183.6,2181.9,1391.6,2031.4,1475z"/>
    </g>
  </svg>
);

const CriteoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#FE5000"/>
    <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">C</text>
  </svg>
);

const NorthbeamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#FFFFFF"/>
    <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">N</text>
  </svg>
);

const GA4Icon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="15" y="2" width="6" height="20" rx="3" fill="#F9AB00"/>
    <rect x="9" y="9" width="6" height="13" rx="3" fill="#E37400"/>
    <circle cx="6" cy="19" r="3" fill="#E37400"/>
  </svg>
);

const GTMIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" transform="rotate(45 12 12)" fill="#4285F4"/>
    <rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)" fill="#FFFFFF"/>
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
        <GoogleIcon className="size-4 sm:size-4 md:size-5" />
     
      </div>
    ),
  },
  {
    title: "Facebook",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Facebook className="size-4 sm:size-4 md:size-5 text-[#1877F2]" />
       
      </div>
    ),
  },
  {
    title: "Instagram",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Instagram className="size-4 sm:size-4 md:size-5 text-[#E4405F]" />
      
      </div>
    ),
  },
  {
    title: "TikTok",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <TikTokIcon className="size-4 sm:size-4 md:size-5 text-[#FF0050]" />
        
      </div>
    ),
  },
  {
    title: "LinkedIn",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <Linkedin className="size-4 sm:size-4 md:size-5 text-[#0A66C2]" />
       
      </div>
    ),
  },
  {
    title: "Etsy",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <EtsyIcon className="size-4 sm:size-4 md:size-5" />
       
      </div>
    ),
  },
  {
    title: "Yandex",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <YandexIcon className="size-4 sm:size-4 md:size-5" />
       
      </div>
    ),
  },
  {
    title: "DV360",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <DV360Icon className="size-4 sm:size-4 md:size-5" />
      </div>
    ),
  },
  {
    title: "Criteo",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <CriteoIcon className="size-4 sm:size-4 md:size-5" />
      </div>
    ),
  },
  {
    title: "Northbeam",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <NorthbeamIcon className="size-4 sm:size-4 md:size-5" />
      </div>
    ),
  },
  {
    title: "GA4",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <GA4Icon className="size-4 sm:size-4 md:size-5" />
      </div>
    ),
  },
  {
    title: "Google Tag Manager",
    content: (
      <div className="flex flex-col items-center space-y-1">
        <GTMIcon className="size-4 sm:size-4 md:size-5" />
      </div>
    ),
  },
];

const chunk = <T,>(items: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, (i + 1) * size));

function AnimatedCardVariant1() {
  return (
    <div className="w-full">
      {/* Mobile: rows of 4 - fully visible cards */}
      <div className="sm:hidden space-y-2">
        {chunk(cardData, 4).map((row, rowIndex) => (
          <div className="grid grid-cols-4 gap-1 px-1" key={rowIndex}>
            {row.map((card) => (
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
        ))}
      </div>

      {/* Desktop: rows of 6 with rotation */}
      <div className="hidden sm:flex flex-col items-center gap-4 px-4">
        {chunk(cardData, 6).map((row, rowIndex) => (
          <div className="flex justify-center items-center gap-0.5" key={rowIndex}>
            {row.map((card, index) => (
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
      case "DV360":
        return "hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5";
      case "Criteo":
        return "hover:border-[#FE5000]/50 hover:bg-[#FE5000]/5";
      case "Northbeam":
        return "hover:border-white/40 hover:bg-white/5";
      case "GA4":
        return "hover:border-[#F9AB00]/50 hover:bg-[#F9AB00]/5";
      case "Google Tag Manager":
        return "hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5";
      default:
        return "hover:border-green-500/30 hover:bg-gray-700/60";
    }
  };

  return (
    <div
      className={cn(
        "group flex h-14 w-full sm:h-20 sm:w-12 md:h-24 md:w-16 transform-gpu flex-col rounded-lg border border-gray-600/30 bg-gray-800/60 backdrop-blur-sm p-1 sm:p-1 md:p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl",
        getBrandHoverColor(title),
        className,
      )}
    >
      <div className="flex flex-1 items-center justify-center">{content}</div>
      <div className="space-y-0.5">
        <p className="font-semibold text-gray-200 text-[7px] sm:text-[8px] md:text-[9px] text-center leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}
