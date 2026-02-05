import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaChrome
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiAzuredevops,
  SiTypescript
} from 'react-icons/si';
import { HiOutlineChartBar, HiOutlineCube } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'JavaScript (ES6+)', icon: FaJs, level: 95, color: 'from-yellow-400 to-yellow-600' },
      { name: 'React.js', icon: FaReact, level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript', icon: SiTypescript, level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: 'from-orange-400 to-red-500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'from-blue-400 to-indigo-500' },
    ]
  },
  {
    title: 'Frontend Concepts',
    skills: [
      { name: 'Redux / State Management', icon: SiRedux, level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'Component Architecture', icon: HiOutlineCube, level: 90, color: 'from-green-400 to-teal-500' },
      { name: 'Data Visualization', icon: HiOutlineChartBar, level: 85, color: 'from-pink-400 to-rose-500' },
    ]
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'Git & Version Control', icon: FaGitAlt, level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Azure DevOps', icon: SiAzuredevops, level: 80, color: 'from-blue-500 to-cyan-500' },
      { name: 'Chrome Extension APIs', icon: FaChrome, level: 75, color: 'from-green-400 to-blue-500' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
