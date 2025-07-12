// src/components/Hero.js
import React from 'react';
// REMOVE THIS LINE: import ThreeBackground from './ThreeBackground';

const Hero = ({ data }) => {
  return (
    // This container now just defines the space for the hero content
    // and centers it. The Three.js background is handled by App.js
    <div className="flex items-center justify-center text-center h-[80vh] px-4">
      <div className="p-4 bg-primary-dark bg-opacity-70 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col items-center"> {/* Added flex-col and items-center */}
        {data.photoPlaceholder && (
          <img
            // Ensure the path to your photo is correct in src/data.js
            // If your photo is in 'public/my_photo.jpg', then data.photoPlaceholder should be '/my_photo.jpg'
            src={'/linkedin_profile_pic.jpg'}
            alt={data.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-accent-blue shadow-lg"
          />
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {data.name}
        </h1>
        <p className="text-xl md:text-3xl text-secondary-light mb-6">
          {data.headline}
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {data.about.summary}
        </p>
        <div className="flex flex-wrap justify-center gap-4"> {/* Changed space-x-4 to gap-4 and added flex-wrap */}
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
  );
};

export default Hero;