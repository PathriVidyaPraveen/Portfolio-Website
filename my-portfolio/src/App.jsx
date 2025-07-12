// src/App.js
import React from 'react'; // Removed useState, useEffect as they are no longer needed for typewriter overlay state
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
import TypewriterEffect from './components/TypewriterEffect.jsx'; // Make sure this import is here

function App() {
  // All state and functions related to the typewriter overlay are removed from App.js
  // (e.g., showTypewriterOverlay, fadingOut, FADE_OUT_DURATION, handleTypewriterComplete)

  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Main content wrapper, sits on top of the Three.js background */}
      {/* This content is fully visible and rendered from the start */}
      <div className="relative z-10 bg-primary-dark bg-opacity-70 min-h-screen">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <section id="home" className="py-16 md:py-24">
            <Hero data={data} />
          </section>

          {/* New Position for TypewriterEffect: Above the About Me section */}
          {/* Wrapped in a div for consistent section padding and centering */}
          <div className="py-16 md:py-24 flex justify-center items-center">
            <TypewriterEffect
              text="Welcome to My Portfolio.....Made with ❤️ by P.Vidya Praveen"
              delay={100}      // Speed of typing each character
              loop={true}      // This will make the effect loop indefinitely
              loopDelay={3000} // Pause for 3 seconds after typing finishes before re-starting
            />
          </div>

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

      {/* The fixed typewriter overlay div is completely removed from here */}
    </div>
  );
}

export default App;
