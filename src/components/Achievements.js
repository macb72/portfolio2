import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaPaintBrush, FaRocket, FaChrome } from 'react-icons/fa';

const achievements = [
  {
    title: 'Performance Rating',
    value: 5,
    max: 5,
    unit: 'A+',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    statement: 'Consistently received A+ performance ratings for five consecutive years at Jio Platforms'
  },
  {
    title: 'UI Consistency Improvement',
    value: 30,
    max: 100,
    unit: '%',
    icon: FaPaintBrush,
    color: 'from-purple-400 to-pink-500',
    statement: 'Led migration of a legacy frontend module to the organization\'s design system, improving UI consistency and usability by 30%'
  },
  {
    title: 'Reusable Components',
    value: 12,
    max: 20,
    unit: '+',
    icon: FaCode,
    color: 'from-blue-400 to-cyan-500',
    statement: 'Built and standardized 12+ reusable, design-system-compliant React components adopted across multiple modules'
  },
  {
    title: 'Development Efficiency',
    value: 50,
    max: 100,
    unit: '%',
    icon: FaRocket,
    color: 'from-green-400 to-teal-500',
    statement: 'Improved development efficiency and product usability by 50% through standardized component library'
  },
  {
    title: 'Chrome Extension',
    value: 1,
    max: 1,
    unit: 'WYSIWYG',
    icon: FaChrome,
    color: 'from-red-400 to-orange-500',
    statement: 'Developed a WYSIWYG Chrome extension for visual A/B testing and personalization, significantly reducing manual configuration effort'
  }
];

const Achievements = () => {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = 50;
      const increment = 1;

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
    }
  }, [isVisible]);

  const formatValue = (achievement, count) => {
    if (achievement.unit === '%') return `${count}%`;
    if (achievement.unit === '+') return `${count}+`;
    if (achievement.unit === 'A+') return 'A+';
    if (achievement.unit === 'WYSIWYG') return 'Built';
    return count;
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlights from my journey as a frontend engineer
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${achievement.color}`}></div>
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-xl" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-2">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {formatValue(achievement, counts[index])}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  
                  {/* Statement */}
                  <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                    expandedIndex === index ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {achievement.statement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
