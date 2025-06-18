// src/pages/CurrentFocus.jsx
import React from 'react';

const CurrentFocus = () => {
  return (
    <div className="page-container">
      <h1>Current Focus</h1>
      <p>I believe in continuous learning. Here is what I am actively working on right now to align my skills with the future of AI engineering.</p>

      <div className="project-card"> {/* We can reuse the project card style! */}
        <h2>Azure Cloud Certification</h2>
        <p>
          I am currently preparing for the <strong>AZ-900: Azure Fundamentals</strong> certification to build a strong foundational knowledge of cloud services. My goal is to follow this with the <strong>AI-102: Azure AI Engineer Associate</strong> certification to deepen my expertise in enterprise-level AI solutions, a core part of Storm ID's technology stack.
        </p>
      </div>

      <div className="project-card">
        <h2>Current Project: Public Sector Complaint Analysis Tool</h2>
        <p>
          Inspired by Storm ID's work with public sector clients, I am building an AI tool to automatically analyze and triage citizen complaints. The goal is to use NLP to summarize the issue, detect sentiment, and classify the complaint into the correct department.
        </p>
        <strong>Tech Stack being used:</strong> React, Python, Flask, Azure Cognitive Services for Language.
        <hr/>
        <h4>Project Log:</h4>
        <ul>
          <li><strong>June 18th, 2025:</strong> Project kickoff. Scoped the initial features and began researching Azure's NLP services. Set up the initial React frontend and Python backend structure.</li>
          {/* Add more log entries here as you make progress! */}
        </ul>
      </div>
    </div>
  );
};

export default CurrentFocus;