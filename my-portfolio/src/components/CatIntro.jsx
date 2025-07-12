// src/components/CatIntro.jsx
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei'; // OrbitControls is useful for debugging
import TypewriterEffect from './TypewriterEffect'; // Reusing your existing typewriter effect

// Helper component to load and display the Cat Model
function CatModel({ modelPath, position, scale, rotation, initialDelay }) {
  const { scene } = useGLTF(modelPath); // Load your GLB model
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Make the cat appear (scale up) after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      // Scale up from almost nothing for an 'appearing' effect
      scale={visible ? scale : [0.01, 0.01, 0.01]}
      rotation={rotation}
    />
  );
}

// Main Cat Intro Overlay Component
const CatIntro = ({ onComplete }) => {
  const [showCat, setShowCat] = useState(true); // Controls if the 3D canvas is mounted
  const [showSpeechBubble, setShowSpeechBubble] = useState(false); // Controls when the speech bubble appears
  const [fadingOut, setFadingOut] = useState(false); // Controls the fade-out animation for the whole intro

  const FADE_OUT_DURATION = 1500; // Duration in milliseconds for the entire intro to fade out

  useEffect(() => {
    // After the CatIntro component mounts and the cat model has a chance to load/appear,
    // show the speech bubble after a small delay.
    const bubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 2000); // Waits 2 seconds for cat to be visible before bubble appears

    return () => clearTimeout(bubbleTimer); // Cleanup timer on unmount
  }, []);

  const handleTypewriterComplete = () => {
    // This function is called by TypewriterEffect when its text is fully typed.
    // Start the fade-out animation for the entire CatIntro.
    setFadingOut(true);

    // After the fade-out animation completes, unmount the CatIntro component
    // from App.js by calling the onComplete prop.
    const unmountTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      setShowCat(false); // Ensure the Canvas unmounts completely
    }, FADE_OUT_DURATION);

    return () => clearTimeout(unmountTimer); // Cleanup timer
  };

  // If showCat is false, the component returns null, effectively unmounting it.
  if (!showCat) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-[${FADE_OUT_DURATION}ms]`}
      // Control opacity using inline style for dynamic transition duration
      style={{ opacity: fadingOut ? 0 : 1 }}
    >
      {/* React Three Fiber Canvas: This is where your 3D scene lives */}
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Basic lighting for your 3D scene */}
        <ambientLight intensity={0.8} /> {/* General light from all directions */}
        <directionalLight position={[10, 10, 5]} intensity={1} /> {/* Light from a specific direction */}
        <directionalLight position={[-10, -10, -5]} intensity={0.5} /> {/* Another light for balance */}

        {/* Suspense is crucial for async operations like loading GLB models */}
        <Suspense fallback={null}> {/* Shows nothing (or a loader) while model loads */}
          <CatModel
            modelPath="/models/cat.glb" // *** IMPORTANT: Make sure this path matches your file! ***
            // --- ADJUSTED VALUES HERE FOR SMALLER CAT AND BETTER INITIAL POSITION ---
            position={[0, -0.8, 0]} // X: horizontal, Y: vertical, Z: depth. -0.8 Y often puts base of cat near screen bottom.
            scale={[0.7, 0.7, 0.7]} // Adjusted scale: Start smaller. If still too big, try 0.5. If too small, increase.
            rotation={[0, Math.PI / 8, 0]} // Optional: slight rotation
            initialDelay={500} // Delay before the cat starts scaling up
          />

          {showSpeechBubble && (
            <Html
              // --- ADJUSTED VALUES HERE FOR BETTER BUBBLE POSITION AND SIZE ---
              position={[0.5, 1.0, 0]} // X: horizontal relative to cat, Y: vertical. Increased Y from 0.5 to 1.0.
              transform             // Enables CSS transforms on the HTML element
              sprite                // Makes the HTML always face the camera
              distanceFactor={3}   // Adjusted distanceFactor: Reduced from 5 to 3. Smaller value makes HTML content appear smaller.
            >
              {/* This is your actual speech bubble HTML structure */}
              <div className="speech-bubble-wrapper p-4 max-w-[280px] md:max-w-sm lg:max-w-md">
                <div className="speech-bubble bg-white text-gray-900 px-6 py-4 rounded-3xl shadow-2xl relative text-lg font-mono">
                  <TypewriterEffect
                    text="Welcome to My Portfolio!" // Your custom message here!
                    delay={70} // Typing speed (milliseconds per character)
                    onComplete={handleTypewriterComplete} // Trigger fade-out when typing is done
                    loop={false} // Important: Do not loop for this one-time intro
                  />
                  {/* Speech bubble pointer (the little triangle) */}
                  <div className="speech-bubble-pointer absolute w-6 h-6 bg-white rotate-45"></div>
                </div>
              </div>
            </Html>
          )}
        </Suspense>

        {/* OrbitControls for Debugging (Uncomment in development) */}
        {/* IMPORTANT: Uncomment the line below during development. */}
        {/* It allows you to drag the scene with your mouse to find ideal cat and bubble positions. */}
        {/* Remember to comment it out before deploying your website! */}
        <OrbitControls />
      </Canvas>

      {/* Inline CSS for the speech bubble and its pointer */}
      <style jsx>{`
        .speech-bubble-wrapper {
          /* This transform places the top-center of the bubble at the Html component's position.
             It's a standard way to position speech bubbles. */
          transform: translate(-50%, -100%);
        }
        .speech-bubble {
          /* Removing 'white-space: nowrap;' allows text to wrap, preventing horizontal overflow and clipping */
          /* If you still want it on a single line, ensure the bubble is wide enough OR reduce font size. */
          /* white-space: nowrap; // Uncomment this line if you specifically want no text wrapping */
          font-weight: bold;
          font-family: 'Fira Code', monospace; /* Using your defined monospace font */
          min-width: fit-content; /* Bubble size fits content initially */
          display: inline-block; /* Helps with fitting content */
          
          /* If text is still clipped vertically, try reducing font size here */
          /* font-size: 1.1rem; // Example */
        }
        .speech-bubble-pointer {
          bottom: -12px; /* Position the pointer just below the main bubble */
          left: 50%;
          transform: translateX(-50%) rotate(45deg); /* Center and rotate to form a triangle */
          transform-origin: 50% 50%; /* Ensure rotation is from its center */
          z-index: -1; /* Place behind the main bubble content */
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2); /* Add a subtle shadow */
          border-bottom-right-radius: 5px; /* Makes the corner match bubble curvature */
        }
      `}</style>
    </div>
  );
};

export default CatIntro;
