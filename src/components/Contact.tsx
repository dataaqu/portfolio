
import { motion } from 'framer-motion';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              GET IN <span className="text-green-500">TOUCH</span>
            </h2>
           
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <motion.a
            href="mailto:Ochigavaandro6@gmail.com"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)"
            }}
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-xl">Email Me</h3>
            <p className="text-green-500 text-sm group-hover:text-green-400 transition-colors">
              Ochigavaandro6@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/andro-ochigava-484109362/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(10, 102, 194, 0.2)"
            }}
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-[#0A66C2]/20 rounded-full flex items-center justify-center group-hover:bg-[#0A66C2]/30 transition-colors">
              <svg className="w-10 h-10 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-xl">Connect on LinkedIn</h3>
            <p className="text-[#0A66C2] text-sm group-hover:text-blue-400 transition-colors">
              Let's network professionally
            </p>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/share/19kWKZ8AZw/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 text-center hover:border-[#1877F2]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(24, 119, 242, 0.2)"
            }}
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-[#1877F2]/20 rounded-full flex items-center justify-center group-hover:bg-[#1877F2]/30 transition-colors">
              <svg className="w-10 h-10 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-xl">Follow on Facebook</h3>
            <p className="text-[#1877F2] text-sm group-hover:text-blue-400 transition-colors">
              Stay connected socially
            </p>
          </motion.a>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg mb-8">
            Available for new projects and collaborations
          </p>
          <motion.a
            href="tel:+995599603352"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </motion.a>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 rounded-full text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-6 h-6 group-hover:text-green-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.button>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
