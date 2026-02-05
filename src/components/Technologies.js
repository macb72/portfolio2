import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaChrome,
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiTailwindcss,
  SiFramer
} from 'react-icons/si';
import { HiOutlineChartBar } from 'react-icons/hi';

const technologies = [
  { 
    name: 'React.js', 
    description: 'Building scalable, component-based UIs with hooks and modern patterns', 
    icon: FaReact,
    color: 'bg-gradient-to-br from-cyan-400 to-blue-500'
  },
  { 
    name: 'JavaScript (ES6+)', 
    description: 'Modern JavaScript with async/await, modules, and functional programming', 
    icon: FaJs,
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
  },
  { 
    name: 'Redux', 
    description: 'State management for complex, data-heavy applications', 
    icon: SiRedux,
    color: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  { 
    name: 'Data Visualization', 
    description: 'Interactive charts and dashboards for analytics platforms', 
    icon: HiOutlineChartBar,
    color: 'bg-gradient-to-br from-pink-400 to-rose-500'
  },
  { 
    name: 'Chrome Extensions', 
    description: 'WYSIWYG tools for A/B testing and personalization', 
    icon: FaChrome,
    color: 'bg-gradient-to-br from-green-400 to-teal-500'
  },
  { 
    name: 'Git & Azure DevOps', 
    description: 'Version control, CI/CD pipelines, and agile workflows', 
    icon: FaGitAlt,
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  { 
    name: 'Tailwind CSS', 
    description: 'Utility-first CSS for rapid, responsive UI development', 
    icon: SiTailwindcss,
    color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
  },
  { 
    name: 'Framer Motion', 
    description: 'Smooth animations and micro-interactions', 
    icon: SiFramer,
    color: 'bg-gradient-to-br from-pink-500 to-purple-600'
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The technologies I use to build production-ready applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
