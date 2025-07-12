// src/components/Projects.js
import React from 'react';

const Projects = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <div key={index} className="bg-component-bg p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            {project.association && (
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-semibold">Associated with:</span> {project.association}
              </p>
            )}
            {project.dates && (
              <p className="text-sm text-gray-300 mb-3">{project.dates}</p>
            )}
            <p className="text-gray-200 text-md mb-4">{project.description}</p>
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-600 text-sm px-3 py-1 rounded-full text-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-blue-400 font-semibold flex items-center"
                >
                  GitHub <span className="ml-1 text-sm">↗</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center"
                >
                  Live Demo <span className="ml-1 text-sm">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;