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
          E-commerce Scale
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
            <span>$2M+ Monthly Revenue</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
            <span>$800K+ Monthly Ad Spend</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <span>US + UK Markets Managed</span>
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
    transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
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
          Performance
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
            <span>3.88x MER</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <span>2.2x ROAS Improvement</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            <span>+250% Purchase Conversions</span>
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
            transition={{ delay: 1.5, duration: 2.5, ease: "easeInOut" }}
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
    transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
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
          Expertise
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
            <span>Meta + Google + Criteo Paid Media</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
            <span>GA4 + GTM + Northbeam Analytics</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-rose-400 rounded-full"></span>
            <span>5-Person Team Leadership</span>
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
            transition={{ delay: 2.4, duration: 2.5, ease: "easeInOut" }}
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

// Mirrored variant: the curve grows from right to left and the text sits on the right
const CHART_AREA_PATH = "M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955s19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z";
const CHART_LINE_PATH = CHART_AREA_PATH.replace(/L653 465H0Z$/, "");

type ReverseChartProps = {
  title: string;
  items: { text: string; dotClass: string }[];
  borderClass: string;
  titleClass: string;
  gridClass: string;
  fillClass: string;
  gradientId: string;
  gradientFrom: string;
  gradientTo: string;
  delay: number;
};

const ReverseChart: React.FC<ReverseChartProps> = ({
  title,
  items,
  borderClass,
  titleClass,
  gridClass,
  fillClass,
  gradientId,
  gradientFrom,
  gradientTo,
  delay,
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative"
  >
    <div className={`dark:shadow-none shadow-xl overflow-hidden rounded-lg border ${borderClass} bg-gradient-to-bl from-gray-900/80 to-black/80 backdrop-blur-sm w-[300px]`}>
      <div className="absolute right-0 p-4 text-white z-10 text-right">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className={`font-bold text-2xl bg-gradient-to-l ${titleClass} bg-clip-text text-transparent mb-3`}
        >
          {title}
        </motion.div>
        <div className="space-y-1 text-xs text-gray-300">
          {items.map((item, index) => (
            <motion.div 
              key={item.text}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-end gap-1"
            >
              <span>{item.text}</span>
              <span className={`w-1 h-1 ${item.dotClass} rounded-full`}></span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={`bg-black/30 ${gridClass}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 465">
          <g transform="translate(653 0) scale(-1 1)">
            <motion.path
              transition={{ delay: 0.3, duration: 1.2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              d={CHART_AREA_PATH}
              className={fillClass}
            />
            <motion.path
              transition={{ delay: delay * 0.6, duration: 2.5, ease: "easeInOut" }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              d={CHART_LINE_PATH}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
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
          className="text-center mt-20 mb-16"
        >
       
          <h2 className="mb-4 font-semibold text-3xl md:test-4xl mt-4 text-white tracking-tighter">
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

        {/* Mirrored Charts Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8 lg:mt-12">
          <ReverseChart
            title="Conversions"
            items={[
              { text: "+250% Purchase Conversions", dotClass: "bg-pink-400" },
              { text: "4.4x Increase in Paid Orders", dotClass: "bg-purple-400" },
              { text: "2.2x ROAS Improvement", dotClass: "bg-rose-400" },
            ]}
            borderClass="border-purple-500/20"
            titleClass="from-purple-400 to-pink-400"
            gridClass="bg-grid-purple-500/5"
            fillClass="fill-purple-500/20"
            gradientId="gradient4"
            gradientFrom="#8b5cf6"
            gradientTo="#ec4899"
            delay={0.2}
          />
          <ReverseChart
            title="Scale"
            items={[
              { text: "$800K+ Monthly Ad Spend", dotClass: "bg-blue-400" },
              { text: "$2M+ Monthly Revenue", dotClass: "bg-purple-400" },
              { text: "6,300+ New Customers", dotClass: "bg-cyan-400" },
            ]}
            borderClass="border-blue-500/20"
            titleClass="from-blue-400 to-purple-400"
            gridClass="bg-grid-blue-500/5"
            fillClass="fill-blue-500/20"
            gradientId="gradient5"
            gradientFrom="#3b82f6"
            gradientTo="#8b5cf6"
            delay={1.5}
          />
          <ReverseChart
            title="Growth"
            items={[
              { text: "+1,200% Lead Growth", dotClass: "bg-green-400" },
              { text: "80% Cost Reduction", dotClass: "bg-blue-400" },
              { text: "13% → 32% Hook Rate", dotClass: "bg-purple-400" },
            ]}
            borderClass="border-green-500/20"
            titleClass="from-green-400 to-blue-400"
            gridClass="bg-grid-green-500/5"
            fillClass="fill-green-500/20"
            gradientId="gradient6"
            gradientFrom="#10b981"
            gradientTo="#3b82f6"
            delay={2.5}
          />
        </div>

       
      </div>
    </div>
  );
};

export default AnimatedChartSection;
