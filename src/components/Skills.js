import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ReactJS', level: 'Expert' },
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React-Redux', level: 'Intermediate' },
  { name: 'RESTful APIs', level: 'Intermediate' },
  { name: 'Chrome API', level: 'Beginner' },
  { name: 'NodeJS', level: 'Beginner' },
  { name: 'Python', level: 'Beginner' },
];

const Skills = () => {
  return (
    <section id="skills" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
