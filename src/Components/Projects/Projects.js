// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Create this CSS file for styling

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Project Title</h3>
        <p>Description of the project.</p>
        <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-item">
        <h3>Another Project</h3>
        <p>Description of the project.</p>
        <a href="https://github.com/yourusername/another-project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
