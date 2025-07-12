// src/App.js
import React, { useState, useEffect } from 'react';
import data from './data.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import HonorsAndAwards from './components/HonorsAndAwards.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThreeBackground from './components/ThreeBackground.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx';

function App() {
  const [showTypewriterOverlay, setShowTypewriterOverlay] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const FADE_OUT_DURATION = 1000; // 1 second for the fade out animation

  const handleTypewriterComplete = () => {
    // Start the fade-out animation
    setFadingOut(true);

    // After the fade-out duration, unmount the typewriter overlay
    setTimeout(() => {
      setShowTypewriterOverlay(false);
    }, FADE_OUT_DURATION);
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Main content wrapper, sits on top of the Three.js background */}
      <div className="relative z-10 bg-primary-dark bg-opacity-70 min-h-screen">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <section id="home" className="py-16 md:py-24">
            <Hero data={data} />
          </section>

          <section id="about" className="py-16 md:py-24">
            <About data={data} />
          </section>

          <section id="skills" className="py-16 md:py-24">
            <Skills data={data} />
          </section>

          <section id="projects" className="py-16 md:py-24">
            <Projects data={data} />
          </section>

          <section id="education" className="py-16 md:py-24">
            <Education data={data} />
          </section>

          <section id="certifications" className="py-16 md:py-24">
            <Certifications data={data} />
          </section>

          <section id="awards" className="py-16 md:py-24">
            <HonorsAndAwards data={data} />
          </section>

          <section id="contact" className="py-16 md:py-24">
            <Contact data={data} />
          </section>
        </main>

        <Footer data={data} />
      </div>

      {/* Typewriter Overlay: Now 'fixed' to the viewport */}
      {showTypewriterOverlay && (
        <div
          // Changed 'absolute' to 'fixed' and increased z-index for assured top layer
          className={`fixed inset-0 z-50 flex items-center justify-center bg-primary-dark bg-opacity-90 transition-opacity duration-1000 ${fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <TypewriterEffect
            text="Welcome to My Portfolio.....Made with ❤️ by P.Vidya Praveen"
            delay={300}
            onComplete={handleTypewriterComplete}
          />
        </div>
      )}
    </div>
  );
}

export default App;
