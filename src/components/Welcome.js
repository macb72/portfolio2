import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleDoubleDown } from 'react-icons/fa';

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

  return (
    <section id="welcome" className="flex flex-col items-center justify-center min-h-screen bg-light px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Hi, I am Mohamed Arfat,<br />
            And I create beautiful, stunning looking websites.
          </h1>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src='/ArfatDP_2_no_bg.png' alt="Profile" className="rounded-full shadow-lg" />
        </motion.div>        
      </div>
      
      {/* Scroll down icon */}
      <motion.div
        className="absolute bottom-8 flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, }}
        onClick={() => scrollToSection('about')}
      >
        <FaAngleDoubleDown className="text-4xl text-primary cursor-pointer hover:text-secondary transition-colors" />
      </motion.div>
    </section>
  );
};

export default Welcome;
