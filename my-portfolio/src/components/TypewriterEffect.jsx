// src/components/TypewriterEffect.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ text, delay = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout when effect re-runs or component unmounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (currentIndex < text.length) {
      // If there are still characters to type, set a timeout to type the next one
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (onComplete) {
      // If all characters are typed and an onComplete callback is provided, call it
      onComplete();
    }

    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, text, delay, onComplete]); // Dependencies for useEffect

  return (
    // Styling adjusted for being inside a speech bubble (smaller text, no extra margin)
    <p className="text-xl md:text-2xl font-bold">
      {displayedText}
      {/* Blinking cursor: Only show when actively typing or at the very end of the message */}
      {currentIndex < text.length && <span className="animate-blink">|</span>}
    </p>
  );
};

export default TypewriterEffect;
