// ChatWidget.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the chat is open
  const [response, setResponse] = useState(null); // State to store user response
  const [showWidget, setShowWidget] = useState(false); // State to show/hide widget after 3 seconds

  useEffect(() => {
    // Show the chat widget after 3 seconds
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenClose = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  const handleResponse = (answer) => {
    setResponse(answer); // Save response in state
    setIsOpen(false); // Close the chat after selecting a response
    console.log(`User response: ${answer}`); // Log the response (replace with backend integration later)
  };

  return (
    showWidget && (
      <div className="fixed bottom-4 right-4 z-50">
        {/* Floating button to open/close the chat */}
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-blue-600 text-white shadow-lg"
            onClick={handleOpenClose}
          >
            ?
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-64 bg-white rounded-lg shadow-lg p-4"
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleOpenClose}
            >
              &#10005;
            </button>

            {/* Chat content */}
            {!response ? (
              <>
                <h4 className="font-semibold mb-2">Did you like the website?</h4>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleResponse('Yes')}
                    className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleResponse('No')}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4 className="font-semibold mb-2">What did you like?</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">
                    Colors
                  </button>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">
                    Simplicity
                  </button>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">
                    Fonts
                  </button>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">
                    Readability
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    )
  );
};

export default ChatWidget;
