// src/components/Contact.js
import React from 'react';

const Contact = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl text-center">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2 inline-block px-4">Get In Touch</h2>
      <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
        Feel free to connect with me! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            className="bg-accent-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Me</span>
          </a>
        )}
        {data.phone && (
          <a
            href={`tel:${data.phone}`}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Me</span>
          </a>
        )}
      </div>

      <div className="flex justify-center space-x-6 text-gray-400">
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300 text-lg">
            GitHub
          </a>
        )}
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300 text-lg">
            LinkedIn
          </a>
        )}
        {data.codeforces && (
          <a href={data.codeforces} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300 text-lg">
            Codeforces
          </a>
        )}
        {data.codechef && (
          <a href={data.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300 text-lg">
            Codechef
          </a>
        )}
        {data.leetcode && (
          <a href={data.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300 text-lg">
            Leetcode
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;