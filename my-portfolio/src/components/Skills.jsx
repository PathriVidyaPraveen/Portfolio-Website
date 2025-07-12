// src/components/Skills.js
import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Skills</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Top Skills</h3>
        <div className="flex flex-wrap gap-3">
          {data.topSkills.map((skill, index) => (
            <span key={index} className="bg-accent-blue text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">All Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.sort().map((skill, index) => ( // Sort alphabetically for better readability
            <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;