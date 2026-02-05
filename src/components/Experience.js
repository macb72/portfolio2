import React from 'react';
import { motion } from 'framer-motion';

const experienceSteps = [
  {
    title: 'Senior Software Development Engineer',
    company: 'Jio Platforms Limited',
    location: 'Mumbai, India',
    duration: 'Dec 2023 – Present',
    responsibilities: [
      'Led frontend development for an A/B testing and personalization platform, delivering data-driven UIs for segmentation, experiments, dashboards, customer profiles, catalogs, and admin workflows',
      'Designed and built analytics dashboards with date-range filters, KPIs, highlights, and interactive charts to visualize experiment and user behavior data',
      'Owned frontend architecture for complex, state-heavy modules, driving scalability, performance optimization, and long-term maintainability',
      'Provided technical leadership through code reviews, task breakdowns, mentoring junior engineers, and close collaboration with backend, QA, and product teams'
    ]
  },
  {
    title: 'Software Development Engineer',
    company: 'Jio Platforms Limited',
    location: 'Mumbai, India',
    duration: 'Sept 2020 – Nov 2023',
    responsibilities: [
      'Developed user-facing features using React and JavaScript based on Figma designs and detailed product requirements',
      'Built and standardized reusable React components and shared utilities to reduce duplication and improve development velocity',
      'Refactored legacy components to improve performance, readability, and long-term maintainability across multiple modules'
    ]
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'Jio Platforms Limited',
    location: 'Mumbai, India',
    duration: 'Aug 2019 – Aug 2020',
    responsibilities: [
      'Contributed to frontend development and QA efforts for large-scale applications including JioMart and MyJio',
      'Identified and reported 4+ blocker and 20+ critical issues during testing cycles, significantly improving release stability and product quality'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          {experienceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 ${
                index === 0 
                  ? 'bg-gradient-to-r from-primary to-accent' 
                  : 'bg-gray-300'
              }`}></div>

              <div className={`bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? 'ring-2 ring-primary/20' : ''
              }`}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  {index === 0 && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-4">
                  <span className="font-medium text-primary">{step.company}</span>
                  <span className="text-gray-400">•</span>
                  <span>{step.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm">{step.duration}</span>
                </div>
                <ul className="space-y-2">
                  {step.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
