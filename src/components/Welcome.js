import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section id="welcome" className="flex items-center justify-center min-h-screen bg-light px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Hi, I am Mohamed Arfat,<br />
            And I create beautiful, stunning looking website.
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
    </section>
  );
};

export default Welcome;
