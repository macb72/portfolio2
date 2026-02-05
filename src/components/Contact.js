import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const form = event.target;
    const data = new FormData(form);

    try {
      // Using Web3Forms - Free contact form service (250 submissions/month)
      // To set up: Create an account at https://web3forms.com and replace the access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        setFormData({ name: '', email: '', message: '' });
        form.reset();
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Something went wrong. Please try again or email me directly.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please try again or email me directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      label: 'Email',
      value: 'shaikharafad72@gmail.com',
      href: 'mailto:shaikharafad72@gmail.com'
    },
    {
      icon: HiOutlineLocationMarker,
      label: 'Location',
      value: 'Mumbai, India (Open to GCC)',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/macb72',
      label: 'GitHub',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/mohd-arfat-shaikh/',
      label: 'LinkedIn',
      hoverColor: 'hover:bg-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-900 font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 ${social.hoverColor} hover:text-white transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              {/* Web3Forms Access Key - Get yours free at https://web3forms.com */}
              <input 
                type="hidden" 
                name="access_key" 
                value="3497330e-1845-41ec-97ad-a65f453fc293" 
              />
              {/* Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none" 
                    placeholder="John Doe"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none" 
                    placeholder="john@example.com"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none" 
                    placeholder="Tell me about your project or just say hi!"
                    required
                  ></textarea>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
