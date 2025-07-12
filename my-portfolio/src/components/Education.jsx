// src/components/Education.js
import React from 'react';

const Education = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Education</h2>
      <div className="space-y-8">
        {data.education.map((edu, index) => (
          <div key={index} className="bg-component-bg p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
            <p className="text-lg text-accent-blue mb-1">{edu.degree}</p>
            <p className="text-gray-300 text-sm mb-2">{edu.dates}</p>
            {edu.grade && <p className="text-gray-200 mb-1"><span className="font-semibold">Grade:</span> {edu.grade}</p>}
            {edu.activities && <p className="text-gray-200 mb-1"><span className="font-semibold">Activities:</span> {edu.activities}</p>}
            {edu.award && <p className="text-green-300 mb-1"><span className="font-semibold">Award:</span> {edu.award}</p>}
            {edu.achievements && <p className="text-gray-200"><span className="font-semibold">Achievements:</span> {edu.achievements}</p>}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Relevant Courses</h3>
      <div className="flex flex-wrap gap-2">
        {data.courses.sort().map((course, index) => (
          <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
            {course}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Education;