import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons from react-icons
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <p className="text-center text-sm">
          Feel free to reach me
        </p>
          <a href="mailto:shaikharafad72@gmail.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
            <MdOutlineEmail size={24} />
          </a>
          <a href="https://github.com/macb72"   target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mohd-arfat-shaikh/"   target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/king.arafat72/"   target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-center text-sm">
          Portfolio created using <span className="font-bold">ReactJS</span>, <span className="font-bold">Tailwind CSS</span>, and <span className="font-bold">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
