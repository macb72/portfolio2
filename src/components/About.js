import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Senior Frontend Engineer with <span className="font-semibold text-primary">6+ years</span> of industry experience building scalable, production-grade web applications and data-intensive dashboards using React and modern JavaScript.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Strong expertise in <span className="font-semibold">component architecture</span>, <span className="font-semibold">state management</span>, and <span className="font-semibold">performance optimization</span>. Currently leading frontend initiatives at Jio Platforms with a focus on frontend architecture, code quality, maintainability, and translating complex product and data requirements into reliable, production-ready interfaces.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['React.js', 'JavaScript (ES6+)', 'Redux', 'Component Architecture', 'Performance Optimization', 'Data Visualization'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-primary rounded-full text-sm font-medium border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
