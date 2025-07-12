// src/components/Hero.js
import React from 'react';

const Hero = ({ data }) => {
  return (
    // This container defines the space for the hero content and centers it.
    <div className="flex items-center justify-center text-center h-[80vh] px-4">
      {/* Main content card: Now uses flex for horizontal layout */}
      <div className="p-4 bg-primary-dark bg-opacity-70 rounded-lg shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {data.photoPlaceholder && (
          <img
            src={'/linkedin_profile_pic.jpg'} // Your image path
            alt={data.name}
            // *** IMPORTANT CHANGE HERE: md:w-64 md:h-48 for horizontal rectangle ***
            className="w-40 h-40 md:w-64 md:h-48 object-cover border-4 border-accent-blue shadow-lg rounded-lg flex-shrink-0"
          />
        )}

        {/* Text content and buttons, grouped in a div to sit next to the image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            {data.name}
          </h1>
          <p className="text-xl md:text-3xl text-secondary-light mb-6">
            {data.headline}
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            {data.about.summary}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              GitHub
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
