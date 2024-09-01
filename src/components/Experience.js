import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experienceSteps = [
  {
    title: 'Senior Software Development Engineer',
    company: 'Jio Platforms Limited',
    duration: 'Dec 2023 – Present',
    responsibilities: [
      'Lead UI/UX and feature development initiatives.',
      'Identify and resolve critical bugs/issues.',
      'Collaborate with Product Managers and UI/UX teams.',
      'Conduct PR reviews and assist juniors with work-related issues.',
      'Manage code merging, build queueing, and deployment to production.'
    ]
  },
  {
    title: 'Software Development Engineer',
    company: 'Jio Platforms Limited',
    duration: 'Sept 2020 – Nov 2023',
    responsibilities: [
      'Developed user interfaces based on Figma design files.',
      'Collaborated with cross-functional teams to develop new features.',
      'Ensured seamless deployment of applications and maintained high code quality.'
    ]
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'Jio Platforms Limited',
    duration: 'Aug 2019 – Aug 2020',
    responsibilities: [
      'Assisted in front-end development projects and gained experience with JavaScript frameworks.',
      'Was part of an E-commerce project as Quality Assurance, identifying more than 4 blocker and over 20 critical level issues successfully in less than 4 months.'
    ]
  }
];

const Experience = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section id="experience" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="relative">
        <ul className="list-none p-0">
          {experienceSteps.map((step, index) => (
            <li key={index} className="flex items-start mb-8">
              <div className={`w-4 h-4 rounded-full border-2 ${index === currentStep ? 'bg-primary border-primary' : 'bg-white border-gray-300'} flex-shrink-0`} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.company}</p>
                <p className="text-gray-600 mb-2">{step.duration}</p>
                <ul className="list-disc ml-6">
                  {step.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
