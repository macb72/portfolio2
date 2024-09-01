import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <p className="text-lg text-gray-700">
        I am a passionate Software Development Engineer with over 4 years of experience specializing in frontend development. My expertise includes working with ReactJS, React-Redux, and JavaScript. I have a proven track record of leading development projects and optimizing user experiences. I thrive in collaborative environments and am committed to delivering high-quality, efficient solutions.
      </p>
    </section>
  );
};

export default About;
