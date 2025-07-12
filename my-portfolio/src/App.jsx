// src/App.js
import React, { useState, useEffect } from 'react'; // Re-introduce useState and useEffect for overlay logic
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
import CatIntro from './components/CatIntro.jsx'; // Import the new CatIntro component

function App() {
  // State to control the visibility of the CatIntro overlay
  const [showCatIntro, setShowCatIntro] = useState(true);

  // Callback function that CatIntro calls when its animation is complete
  const handleCatIntroComplete = () => {
    setShowCatIntro(false); // Hide and unmount the CatIntro component
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Main content wrapper - Your portfolio content */}
      {/* This will be hidden by CatIntro initially, then become visible */}
      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <section id="home" className="py-16 md:py-24">
            <Hero data={data} />
          </section>

          {/* IMPORTANT: Remove the old looping TypewriterEffect from here */}
          {/* It is now exclusively managed inside the CatIntro component */}

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

      {/* Cat Intro Overlay: This renders on top of everything else initially */}
      {/* It will automatically fade out and unmount itself via the onComplete prop */}
      {showCatIntro && <CatIntro onComplete={handleCatIntroComplete} />}
    </div>
  );
}

export default App;
