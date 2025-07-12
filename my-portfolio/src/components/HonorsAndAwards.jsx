// src/components/HonorsAndAwards.js
import React from 'react';


const HonorsAndAwards = ({ data }) => {
  return (
    <div className="bg-component-bg p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-accent-blue mb-6 border-b-2 border-accent-blue pb-2">Honors & Awards</h2>

      <div className="space-y-6 mb-8">
        {data.honorsAndAwards.map((award, index) => (
          <div key={index} className="bg-component-bg p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-1">{award.name}</h3>
            <p className="text-gray-300 text-sm mb-1">Issued by: {award.issuer} &bull; {award.date}</p>
            <p className="text-gray-200">{award.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">Test Scores</h3>
      <div className="space-y-4">
        {data.testScores.map((score, index) => (
          <div key={index} className="bg-component-bg p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-1">{score.name}</h3>
            <p className="text-gray-300 text-sm mb-1">Score: {score.score} &bull; {score.date}</p>
            <p className="text-gray-200">Rank: {score.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HonorsAndAwards;

