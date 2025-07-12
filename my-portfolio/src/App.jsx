// src/App.js
import React from 'react';
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
import ThreeBackground from './components/ThreeBackground.jsx'; // Ensure this path is correct

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Three.js Background covering the entire page, below all content */}
      {/* *** IMPORTANT CHANGE: Applying the custom CSS class directly *** */}
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>

      {/* Main content wrapper, sits on top of the Three.js background */}
      {/* Ensure bg-primary-dark is defined in your Tailwind config if it's not a default color */}
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
    </div>
  );
}

export default App;