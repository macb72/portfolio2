import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'MongoDB', description: 'NoSQL database', color: 'bg-green-600' },
  { name: 'Express.js', description: 'Backend framework for Node.js', color: 'bg-gray-800' },
  { name: 'React.js', description: 'Frontend library', color: 'bg-blue-600' },
  { name: 'Node.js', description: 'JavaScript runtime', color: 'bg-green-700' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white ${tech.color} hover:opacity-90 transition-opacity`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p>{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
