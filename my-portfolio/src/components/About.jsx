// src/components/About.js
import React from 'react';

const About = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl text-white"> {/* Added text-white here for general text */}
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        {data.about.detailed}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md">
        <div>
          <h3 className="font-semibold text-white mb-2">Personal Details:</h3>
          <ul> {/* Text inside <li> will now inherit text-white from parent div */}
            <li><strong className="text-accent-blue">Location:</strong> {data.location}</li>
            <li><strong className="text-accent-blue">Date of Birth:</strong> {data.dob}</li>
            <li><strong className="text-accent-blue">Phone:</strong> {data.phone}</li>
            <li><strong className="text-accent-blue">Email:</strong> <a href={`mailto:${data.email}`} className="text-blue-400 hover:underline">{data.email}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Coding Profiles:</h3>
          <ul> {/* Text inside <li> will now inherit text-white from parent div */}
            <li><strong className="text-accent-blue">GitHub:</strong> <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Profile</a></li>
            <li><strong className="text-accent-blue">Codeforces:</strong> <a href={data.codeforces} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Profile</a></li>
            <li><strong className="text-accent-blue">Codechef:</strong> <a href={data.codechef} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Profile</a></li>
            <li><strong className="text-accent-blue">Leetcode:</strong> <a href={data.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Profile</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-white mb-2">Languages:</h3>
        <ul className="list-disc list-inside"> {/* Text inside <li> will now inherit text-white from parent div */}
          {data.languages.map((lang, index) => (
            <li key={index} className="mb-1">
              <span className="text-accent-blue">{lang.name}:</span> {lang.proficiency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;