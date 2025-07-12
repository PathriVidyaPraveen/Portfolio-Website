// src/components/TypewriterEffect.jsx
import React, { useState, useEffect, useRef } from 'react'; // Added useRef

const TypewriterEffect = ({ text, delay = 100, loop = false, loopDelay = 2000 }) => { // Added loop and loopDelay
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null); // To store the timeout ID for cleanup

  useEffect(() => {
    // Clear any existing timeout when dependencies change or component unmounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (currentIndex < text.length) {
      // If there are still characters to type
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (loop) {
      // If typing is complete and looping is enabled
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(''); // Clear the text
        setCurrentIndex(0);   // Reset index to start typing from scratch
      }, loopDelay); // Wait for loopDelay before re-starting
    }

    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, text, delay, loop, loopDelay]); // Dependencies for useEffect

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
      {displayedText}
      {/* Blinking cursor: Show only when actively typing or if not looping (so it stays at the end) */}
      {!loop || (loop && currentIndex < text.length) ? <span className="animate-blink">|</span> : null}
    </h2>
  );
};

export default TypewriterEffect;
