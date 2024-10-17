// app/components/ChatUsButton.jsx
'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-green-500 p-4 relative">
            <h3 className="text-white text-lg font-semibold">Nexus Tool</h3>
            <p className="text-white text-sm opacity-80 mt-1">
              Hi! Click below to chat on <strong>WhatsApp</strong>
            </p>
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-white opacity-70 hover:opacity-100 transition-opacity"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-3">
              The team typically replies in a few minutes.
            </p>
            <a
              href="https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              {/* Avatar */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <FaWhatsapp className="text-white w-6 h-6" aria-hidden="true" />
              </div>
              {/* Text */}
              <div>
                <div className="text-sm font-medium">Nexus Tool</div>
                <div className="text-xs text-gray-400">Customer Support</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="flex items-center bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Need Help? Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 mr-2" aria-hidden="true" />
        <span className="font-semibold">Need Help? Chat us</span>
      </button>
    </div>
  );
};

export default ChatUsButton;
