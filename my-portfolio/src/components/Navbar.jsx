// src/components/Navbar.js - Option 1: Evenly Distributed Links
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary-dark text-secondary-light p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-center items-center"> {/* Changed justify-between to justify-center */}
        <div className="flex gap-8"> {/* Changed space-x-4 to flex gap-8 for more uniform spacing */}
          <a href="#about" className="hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl">About</a>
          <a href="#skills" className="hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl">Skills</a>
          <a href="#projects" className="hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl">Projects</a>
          <a href="#education" className="hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl">Education</a>
          <a href="#contact" className="hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;