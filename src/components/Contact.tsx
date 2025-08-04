
import { motion } from 'framer-motion';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              GET IN <span className="text-green-500">TOUCH</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to scale your business with high-converting ad campaigns? Let's connect and discuss your goals.
            </p>
          </motion.div>
        </div>

        {/* Contact Cards - LinkedIn Only */}
        <div className="flex justify-center max-w-sm mx-auto">
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all duration-300 w-full"
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
              Let's network and explore opportunities
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
            href="tel:+995592089355"
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
