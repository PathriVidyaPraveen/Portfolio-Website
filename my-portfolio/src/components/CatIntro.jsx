// src/components/CatIntro.jsx
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import TypewriterEffect from './TypewriterEffect';

// Helper component to load and display the Robot Model
function RobotModel({ modelPath, position, scale, rotation, initialDelay }) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
      scale={visible ? scale : [0.01, 0.01, 0.01]}
      rotation={rotation}
    />
  );
}

// Main Robot Intro Overlay Component
const CatIntro = ({ onComplete }) => { // Renamed from CatIntro to be more generic if you prefer, but component name stays CatIntro.jsx
  const [showRobot, setShowRobot] = useState(true);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const FADE_OUT_DURATION = 1500;

  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 2000); // Waits 2 seconds for robot to be visible before bubble appears

    return () => clearTimeout(bubbleTimer);
  }, []);

  const handleTypewriterComplete = () => {
    setFadingOut(true);
    const unmountTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      setShowRobot(false);
    }, FADE_OUT_DURATION);
    return () => clearTimeout(unmountTimer);
  };

  if (!showRobot) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-[${FADE_OUT_DURATION}ms]`}
      style={{ opacity: fadingOut ? 0 : 1 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <RobotModel
            modelPath="/models/cat.glb" // Still using 'cat.glb' as the filename, assuming you replaced the content
            position={[0, -0.8, 0]} // Adjust this if the robot is too high/low
            scale={[0.7, 0.7, 0.7]} // Adjust this if the robot is too big/small
            rotation={[0, Math.PI / 8, 0]}
            initialDelay={500}
          />

          {showSpeechBubble && (
            <Html
              // *** ADJUSTED POSITION HERE ***
              // [X, Y, Z] coordinates in 3D space
              // X: horizontal (positive = right, negative = left)
              // Y: vertical (positive = up, negative = down)
              // Z: depth (positive = closer to camera, negative = further away)
              position={[0.3, 1.2, 0]} // Start with smaller X, slightly higher Y.
              transform
              sprite
              distanceFactor={3} // Keep this at 3 for now, adjusts overall size of HTML in 3D
            >
              <div className="speech-bubble-wrapper p-4 max-w-[280px] md:max-w-sm lg:max-w-md">
                <div className="speech-bubble bg-white text-gray-900 px-6 py-4 rounded-3xl shadow-2xl relative text-lg font-mono">
                  <TypewriterEffect
                    text="Welcome to My Portfolio!"
                    delay={70}
                    onComplete={handleTypewriterComplete}
                    loop={false}
                  />
                  <div className="speech-bubble-pointer absolute w-6 h-6 bg-white rotate-45"></div>
                </div>
              </div>
            </Html>
          )}
        </Suspense>

        {/* IMPORTANT: Uncomment OrbitControls during development to fine-tune positions */}
        <OrbitControls />
      </Canvas>

      <style jsx>{`
        .speech-bubble-wrapper {
          transform: translate(-50%, -100%);
        }
        .speech-bubble {
          font-weight: bold;
          font-family: 'Fira Code', monospace;
          min-width: fit-content;
          display: inline-block;
        }
        .speech-bubble-pointer {
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          transform-origin: 50% 50%;
          z-index: -1;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          border-bottom-right-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default CatIntro;
