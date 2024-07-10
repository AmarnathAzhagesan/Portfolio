import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Software Developer Intern</h3>
        <p>Write IT Solutions</p>
        <p>June 2024 - July 2024</p>
        <p>
        <li>Created a chatbot using the RASA framework for the
        company, designed to handle user FAQs.</li>
        <li>Developed a chatbot admin interface using React for
         managing the chatbot, and implemented backend APIs with
         Django.</li>
         <li>
         Gained comprehensive knowledge of React, Django, RASA,
         databases, and the software development life cycle.
         </li>
        </p>
      </div>
      <div className="experience-item">
        <h3>Member</h3>
        <p>Team SOC Events</p>
        <p>August 2022 - Present</p>
        <p><li>Organized and managed computing-centric events, including
        hackathons, coding competitions, and other domain-specific
        activities for the college's technical fest.</li></p>
      </div>
      <div className="experience-item">
        <h3>Member</h3>
        <p>Team Operations & Control</p>
        <p>August 2022 - Present</p>
        <p><li>Managed planning, layout design, event scheduling, and
        quality control for the college's cultural fest as part of the
        team responsibilities.</li></p>
      </div>
    </section>
  );
};

export default Experience;
