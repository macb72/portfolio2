// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  let hideTimeout = null;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
      setVisible(true); // Show the header on scroll
      resetHideTimeout(); // Reset the hide timeout on scroll
    } else {
      setScrolled(false);
    }
  };

  const handleMouseMove = () => {
    setVisible(true); // Show the header when mouse is moved
    resetHideTimeout(); // Reset the hide timeout on mouse move
  };

  const resetHideTimeout = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => setVisible(false), 500); // Hide the header after 2 seconds of inactivity
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} ${scrolled ? 'bg-primary text-white py-4' : 'bg-background text-secondary py-2'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-2xl font-extrabold ${scrolled ? 'text-white' : 'text-primary'}`}>
            <span className="inline-block text-3xl font-bold">Mohd Arfat</span><br />
          </h1>
        </motion.div>
        <nav className="hidden md:block"> {/* Hide links for mobile devices */}
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`hover:underline transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className={`hover:underline transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={`hover:underline transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                className={`hover:underline transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`hover:underline transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
