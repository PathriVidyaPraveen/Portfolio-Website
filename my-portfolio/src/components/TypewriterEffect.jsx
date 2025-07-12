// src/components/TypewriterEffect.jsx
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, delay = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay); // Delay for each character

      return () => clearTimeout(timeout); // Cleanup on component unmount
    } else if (onComplete) {
      onComplete(); // Call callback when typing is complete
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
      {displayedText}
      {/* Optional: Add a blinking cursor effect */}
      <span className="animate-blink">|</span>
    </h2>
  );
};

export default TypewriterEffect;
