// src/App.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
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
import TypewriterEffect from './components/TypewriterEffect.jsx'; // Import the new component

function App() {
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleTypewriterComplete = () => {
    // Once typewriter is complete, wait a small moment, then fade in portfolio
    setTimeout(() => {
      setShowTypewriter(false); // Hide the typewriter effect
      setShowPortfolio(true);   // Show the main portfolio content
    }, 1000); // Wait 1 second after typing finishes before transitioning
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Conditional Rendering for Typewriter Effect */}
      {showTypewriter && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary-dark bg-opacity-90 transition-opacity duration-1000" // Added transition for fade out
             style={{ opacity: showTypewriter ? 1 : 0 }}>
          <TypewriterEffect
            text="Welcome to My Portfolio"
            delay={100} // Adjust typing speed here
            onComplete={handleTypewriterComplete}
          />
        </div>
      )}

      {/* Main content wrapper, sits on top of the Three.js background */}
      {/* Conditionally render this only after the typewriter effect is done */}
      {/* Added transition-opacity for a smooth fade-in */}
      <div className={`relative z-10 bg-primary-dark bg-opacity-70 min-h-screen transition-opacity duration-1000 ${showPortfolio ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
    </div>
  );
}

export default App;
