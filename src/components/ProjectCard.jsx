// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

// Add 'imageUrl' and 'imageAlt' to the props
const ProjectCard = ({ title, description, techStack, relevance, imageUrl, imageAlt }) => {
  return (
    <div className="project-card">
      {/* Conditionally render the image if imageUrl is provided */}
      {imageUrl && (
        <div className="card-image-container">
          <img src={imageUrl} alt={imageAlt || 'Project visual'} className="card-image" />
        </div>
      )}
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
