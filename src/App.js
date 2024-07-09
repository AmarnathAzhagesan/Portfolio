import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './App.css'; // Make sure to import your CSS file

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
