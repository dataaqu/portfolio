import React from 'react';
import { motion } from 'framer-motion';

// Create multiple chart variants with different metrics
const ROIChart = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative"
  >
    <div className="dark:shadow-none shadow-xl overflow-hidden rounded-lg border border-green-500/20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm w-[300px]">
      <div className="absolute p-4 text-white z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold text-2xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-3"
        >
          Conversions
        </motion.div>
        <div className="space-y-1 text-xs text-gray-300">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
            <span>+250% Purchase Conversions</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
            <span>2.2x ROAS Improvement</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <span>4.4x Increase in Paid Orders</span>
          </motion.div>
        </div>
      </div>
      <div className="bg-black/30 bg-grid-green-500/5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 465">
          <motion.path
            transition={{ delay: 0.3, duration: 1.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z"
            className="fill-green-500/20"
          />
          <motion.path
            transition={{ duration: 2.5, ease: "easeInOut" }}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </motion.div>
);

const ConversionChart = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative"
  >
    <div className="dark:shadow-none shadow-xl overflow-hidden rounded-lg border border-blue-500/20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm w-[300px]">
      <div className="absolute p-4 text-white z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3"
        >
          Interaction
        </motion.div>
        <div className="space-y-1 text-xs text-gray-300">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
            <span>4x More Qualified Leads</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <span>5x Boost in Contact Requests</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            <span>80+ Daily Conversation</span>
          </motion.div>
        </div>
      </div>
      <div className="bg-black/30 bg-grid-blue-500/5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 465">
          <motion.path
            transition={{ delay: 0.5, duration: 1.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z"
            className="fill-blue-500/20"
          />
          <motion.path
            transition={{ delay: 0.2, duration: 2.5, ease: "easeInOut" }}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </motion.div>
);

const CostChart = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative"
  >
    <div className="dark:shadow-none shadow-xl overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm w-[300px]">
      <div className="absolute p-4 text-white z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3"
        >
          KPI indicators
        </motion.div>
        <div className="space-y-1 text-xs text-gray-300">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <span>+80% Impressions at Lower CPM</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
            <span>CPM Down to $0.90 from $1.5</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-rose-400 rounded-full"></span>
            <span>+3.8% Avg. CTR</span>
          </motion.div>
        </div>
      </div>
      <div className="bg-black/30 bg-grid-purple-500/5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 465">
          <motion.path
            transition={{ delay: 0.7, duration: 1.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z"
            className="fill-purple-500/20"
          />
          <motion.path
            transition={{ delay: 0.4, duration: 2.5, ease: "easeInOut" }}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </motion.div>
);

const AnimatedChartSection: React.FC = () => {
  return (
    <div className="relative w-full bg-black py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-green-500/5 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
       
          <h2 className="mb-4 font-semibold text-3xl md:test-4xl text-white tracking-tighter">
            Data-Driven Results
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real metrics from successful advertising campaigns that showcase measurable business growth
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <ROIChart />
          <ConversionChart />
          <CostChart />
        </div>

       
      </div>
    </div>
  );
};

export default AnimatedChartSection;
