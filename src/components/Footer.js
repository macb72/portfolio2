import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: MdOutlineEmail, href: 'mailto:shaikharafad72@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/macb72', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohd-arfat-shaikh/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/king.arafat72/', label: 'Instagram' },
  ];

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohamed Arfat
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Frontend Engineer building scalable web applications with React and modern JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mohamed Arfat. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built using 
              <span className="text-white">React</span>, 
              <span className="text-white">Tailwind CSS</span> & 
              <span className="text-white">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
