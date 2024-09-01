import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Performance Rating',
    value: 5,
    max: 5,
    unit: 'A+',
    statement: 'Consistently received an A+ performance rating over the last 5 years.'
  },
  {
    title: 'User Experience Improvement',
    value: 50,
    max: 100,
    unit: '%',
    statement: 'Transitioned a legacy product to a new design based on the company’s latest standards, improving user experience and interface consistency across the portfolio by 50%.'
  },
  {
    title: 'Usability Improvement',
    value: 50,
    max: 100,
    unit: '%',
    statement: 'Developed and integrated over 12 reusable ReactJS components, improving product usability by 50%.'
  },
  {
    title: 'Performance Enhancement',
    value: 30,
    max: 100,
    unit: '%',
    statement: 'Optimized and refactored key components, enhancing performance by 30% and maintainability.'
  },
  {
    title: 'User Engagement Increase',
    value: 22.5,
    max: 100,
    unit: '%',
    statement: 'Developed a browser extension using Chrome API and ReactJS, projected to reduce manual work and increase user engagement by 20-25% upon deployment.'
  }
];

const Achievements = () => {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [visibleIndex, setVisibleIndex] = useState(null);

  useEffect(() => {
    const duration = 2000; // 2 seconds for each animation
    const interval = 50; // Update every 50 milliseconds
    const increment = 1; // Increment step

    const updateCounts = () => {
      const timers = achievements.map((achievement, index) => {
        const endValue = achievement.value;
        let currentValue = 0;
        const timer = setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (currentValue >= endValue) {
              clearInterval(timer);
              return newCounts;
            }
            currentValue += increment;
            newCounts[index] = Math.min(currentValue, endValue);
            return newCounts;
          });
        }, interval);

        return timer;
      });

      return () => timers.forEach(timer => clearInterval(timer));
    };

    updateCounts();
  }, []);

  return (
    <section id="achievements" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            onMouseEnter={() => setVisibleIndex(index)}
            onMouseLeave={() => setVisibleIndex(null)}
          >
            <div className="relative w-full flex flex-col items-center">
              <div className={`absolute top-4 text-4xl font-bold text-primary ${visibleIndex === index ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {achievement.unit === '%' ? `${counts[index]}%` : achievement.unit}
                </motion.span>
              </div>
              <h3 className={`text-xl font-semibold mb-4 mt-16 ${visibleIndex === index ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                {achievement.title}
              </h3>
              <p className={`text-gray-600 text-center absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full transition-opacity duration-300 ${visibleIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                {achievement.statement}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
