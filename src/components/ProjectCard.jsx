// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, relevance }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="tech-stack">
        <strong>Tech Stack:</strong> {techStack}
      </div>
      <div className="relevance">
        <strong>Relevance to Storm ID:</strong> {relevance}
      </div>
    </div>
  );
};

export default ProjectCard;