import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaBriefcase, FaTools, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

const SidePanel = () => {
  const [visible, setVisible] = useState(true);
  let hideTimeout = null;

  // Function to reset the inactivity timeout
  const resetHideTimeout = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => setVisible(false), 1000); // Hide after 2 seconds of inactivity
  };

  // Function to show the panel on user activity
  const handleUserActivity = () => {
    setVisible(true); // Show the panel on any activity
    resetHideTimeout(); // Reset the timeout
  };

  useEffect(() => {
    // Add event listeners for detecting user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed left-4 top-1/3 z-50 md:hidden flex flex-col items-center space-y-4 bg-primary p-2 rounded-lg shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer hover:text-secondary transition-colors"
      >
        <FaUser size={24} />
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer hover:text-secondary transition-colors"
      >
        <FaBriefcase size={24} />
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer hover:text-secondary transition-colors"
      >
        <FaTools size={24} />
      </Link>
      <Link
        to="technologies"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer hover:text-secondary transition-colors"
      >
        <FaLaptopCode size={24} />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer hover:text-secondary transition-colors"
      >
        <FaEnvelope size={24} />
      </Link>
    </div>
  );
};

export default SidePanel;
