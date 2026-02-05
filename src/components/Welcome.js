import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleDoubleDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentDownload, HiOutlineMail } from 'react-icons/hi';

const Welcome = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleHireMeClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="welcome" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-2 mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Senior Frontend Engineer
            </span>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              📍 Mumbai • Open to GCC
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hey, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohamed Arfat
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Building scalable, production-grade web applications with React and modern JavaScript. 
            <span className="font-medium text-gray-800"> 6+ years</span> crafting data-driven interfaces at Jio Platforms.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <motion.a
              href="resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineDocumentDownload className="text-xl" />
              Download Resume
            </motion.a>
            
            <motion.button
              onClick={handleHireMeClick}
              className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineMail className="text-xl" />
              Get In Touch
            </motion.button>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              href="https://github.com/macb72"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohd-arfat-shaikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl scale-110"></div>
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/20 animate-spin-slow scale-125"></div>
            
            <img
              src={process.env.PUBLIC_URL + '/arfat_latest.jpeg'}
              alt="Mohamed Arfat"
              className="relative rounded-full shadow-2xl w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover ring-4 ring-white"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="cursor-pointer"
        >
          <FaAngleDoubleDown className="text-4xl text-primary hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Welcome;
