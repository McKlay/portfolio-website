import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Encryption from './components/sections/Encryption';
import Footer from './components/layout/Footer';
import { StarsCanvas } from './components/GlobalStarfield';

const App = () => {
  return (
    <div className="relative w-full overflow-x-hidden scroll-smooth">
      <StarsCanvas />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Encryption />
      <Footer />
    </div>
  );
};

export default App;