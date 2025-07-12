// src/components/Footer.js
import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-component-bg text-secondary-light p-6 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with React and Tailwind CSS. Impressive UI powered by Three.js.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300">
              GitHub
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300">
              LinkedIn
            </a>
          )}
          {data.email && (
            <a href={`mailto:${data.email}`} className="hover:text-accent-blue transition-colors duration-300">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;