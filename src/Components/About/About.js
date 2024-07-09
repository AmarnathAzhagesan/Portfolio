import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img src="path_to_your_image.jpg" alt="Your Name" className="about-image" />
        <div className="about-details">
          <h2>Amarnath A</h2>
          <h3>CSE Undergrad'25 at SASTRA University</h3>
          <p>Aspiring CSE undergrad with growing proficiency in full-stack development and machine learning.
            Known for solid problem-solving skills and a strong ability to learn quickly. Adaptable team player with a
             passion for leveraging technology effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
