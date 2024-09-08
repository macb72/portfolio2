import React, { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('Did you like the website?');
  const [options, setOptions] = useState(['Yes', 'No']);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleResponse = (response) => {
    setResponse(response);
    if (response === 'Yes') {
      setTimeout(() => {
        setCurrentQuestion('What did you like?');
        setOptions(['Colors', 'Simplicity', 'Fonts', 'Readability']);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentQuestion('What can we improve?');
        setOptions(['Speed', 'Design', 'Usability', 'Content']);
      }, 500);
    }
  };

  const toggleWidget = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="p-4 bg-white border rounded-lg shadow-md w-64">
          <button onClick={toggleWidget} className="absolute top-1 right-2">
            X
          </button>
          <p>{currentQuestion}</p>
          <div className="flex flex-col mt-2 space-y-2">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleResponse(option)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={toggleWidget} className="p-2 bg-blue-500 text-white rounded-full shadow-md">
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
