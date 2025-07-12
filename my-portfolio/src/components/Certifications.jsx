// src/components/Certifications.js
import React from 'react';

const Certifications = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.certifications.map((cert, index) => (
          <div key={index} className="bg-component-bg p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
            <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
            {cert.issuedDate && <p className="text-gray-400 text-xs mb-2">Issued: {cert.issuedDate}</p>}
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-600 text-blue-200 text-xs px-2 py-0.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-blue-400 text-sm font-semibold flex items-center mt-2"
              >
                Show Credential <span className="ml-1 text-sm">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;