import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Send email using EmailJS
    emailjs.sendForm('service_dlblibl', 'template_1jco4j8', form, 'shaikharafad72@gmail.com')
      .then((result) => {
        alert('Message sent successfully!');
        form.reset();
      }, (error) => {
        alert('Error sending message.');
      });
  };

  return (
    <section id="contact" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" className="p-2 border border-gray-300 rounded-md" required></textarea>
        </div>
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition-colors">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
