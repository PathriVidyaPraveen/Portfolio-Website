// src/App.js
import React from 'react'; // No useState, useEffect needed for this structure anymore
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
  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Main content wrapper: REMOVED GLOBAL BACKGROUND OVERLAY */}
      {/* It now only manages z-index and min-height, allowing Three.js background to show through */}
      <div className="relative z-10 min-h-screen"> 
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <section id="home" className="py-16 md:py-24">
            <Hero data={data} />
          </section>

          {/* TypewriterEffect remains in its section */}
          <div className="py-16 md:py-24 flex justify-center items-center">
            <TypewriterEffect
              text="Welcome to My Portfolio....."
              delay={100}
              loop={true}
              loopDelay={3000}
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
    </div>
  );
}

export default App;
