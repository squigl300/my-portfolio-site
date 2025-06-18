// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Import the component

const Projects = () => {
  return (
    <div className="page-container">
      <h1>AI Projects</h1>
      <p>A selection of my work demonstrating key skills in AI, data analysis, and cloud development. Each project highlights my ability to tackle complex problems and deliver effective solutions.</p>

      <ProjectCard
        title="AI-Powered Personality Detection Chatbot (Honours Project)"
        description="Designed and built a conversational AI to detect personality traits (e.g., extroversion, agreeableness) from user text input. The project involved data preprocessing, feature extraction, training multiple machine learning models, and deploying a functional chatbot interface."
        techStack="Python, Scikit-learn, NLTK, Pandas, Flask"
        relevance="This project provided deep, hands-on experience with NLP, text classification, and conversational AI design — skills directly applicable to Storm ID's work in automated Case Triage and intelligent Complaints Handling."
      />

      <ProjectCard
        title="Machine Learning & Data Analysis"
        description="[Briefly describe another project from this module. E.g., 'Analyzed a large dataset to predict customer behaviour, employing techniques like logistic regression and decision trees to identify key predictors...']"
        techStack="[e.g., Python, Pandas, Matplotlib, Scikit-learn]"
        relevance="[e.g., This aligns with the predictive analytics work Storm ID delivered for the NHS, demonstrating an ability to extract meaningful insights from complex data.]"
      />
      
      {/* Add more ProjectCard components for your other key modules */}

    </div>
  );
};

export default Projects;