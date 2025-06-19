// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="page-container">
      <h1>AI & Software Engineering Projects</h1>
      <p>A selection of my work demonstrating key skills in AI, data analysis, and cloud development. For a deeper dive into any project, please view the full report.</p>

      <div className="projects-grid">
        <ProjectCard
          title="Honours Project: AI-Powered Personality Chatbot"
          description="Engineered a privacy-first conversational AI to explore personality preferences. The project involved designing a modular system architecture, advanced prompt engineering, and implementing a hybrid AI model that balanced LLM-based generation with stable, deterministic Python logic for core analytics. This was my most comprehensive project, showcasing end-to-end AI system development."
          techStack="Python, LangChain, Ollama, Mistral 7B, Streamlit"
          relevance="Directly applicable to Storm ID's work in conversational AI and Agentic Workflows. It demonstrates a pragmatic and ethical approach to building complex, NLP-driven solutions."
          imageUrl="/B.1-High-Level-Architecture.png"
          imageAlt="High-Level Architecture Diagram for the AI Chatbot"
          reportUrl="/honours-project-report.pdf"
        />
        <ProjectCard
          title="Machine Learning for Predictive Healthcare"
          description="Developed and validated a Random Forest model to predict patient stroke likelihood from clinical data. The project involved a full data science pipeline: preprocessing, feature engineering to capture non-linear relationships, and cross-validation, achieving 91% accuracy."
          techStack="Python, Pandas, Scikit-learn, Matplotlib"
          relevance="This project aligns perfectly with Storm ID's work in predictive healthcare analytics for the NHS, demonstrating my ability to turn raw data into clinically relevant insights."
          imageUrl="/ml-roc-curve.png"
          imageAlt="ROC Curve for Stroke Prediction Model"
          reportUrl="/ml-report.pdf"
        />
        <ProjectCard
          title="Relational Database Design for Healthcare"
          description="Designed a comprehensive, normalized relational database schema for a healthcare client to manage patient, provider, and prescription data. The process involved creating a full Entity-Relationship Diagram (ERD), applying normalization rules to the Third Normal Form (3NF), and modeling complex relationships including supertypes, subtypes, and recursive relationships."
          techStack="Database Design, ERD, Normalization, SQL, Oracle"
          relevance="Showcases a strong command of data modeling and database architecture, a foundational skill for building the robust and scalable data platforms that are central to Storm ID's services."
          imageUrl="/db-final-erd.png"
          imageAlt="Final Entity-Relationship Diagram for the Healthcare Database"
          reportUrl="/db-report.pdf"
        />
        <ProjectCard
          title="Application Architecture & Design Patterns"
          description="Designed a scalable e-commerce system architecture for a premium goods company. The solution incorporated multiple design patterns, including Model-View-Controller (MVC) and an Event-Driven Architecture, to ensure the system was robust, maintainable, and ready for future expansion."
          techStack="System Design, UML, MVC, Event-Driven Architecture"
          relevance="Demonstrates a strong understanding of how to architect the kind of enterprise-grade platforms that Storm ID builds for its public sector clients."
          imageUrl="/aadp-deployment-view.png"
          imageAlt="Deployment View Diagram for E-Commerce System"
          reportUrl="/aadp-report.pdf"
        />
        <ProjectCard
          title="Integrated Group Project: PT Connect Fitness App"
          description="Acted as the lead Web Developer in a team of six to build a management suite for personal trainers. I was responsible for the React-based web application, which included a client dashboard, scheduling features, and data visualisation."
          techStack="React, JavaScript, HTML/CSS, Chart.js, Firebase"
          relevance="Showcases direct, hands-on experience with React—Storm ID's primary front-end technology—and proves my ability to collaborate effectively in a team environment to deliver a final product."
          imageUrl="/ip3-mvc-diagram.png"
          imageAlt="MVC Diagram for the PT Connect App"
          reportUrl="/ip3-report.pdf"
        />
      </div>
    </div>
  );
};

export default Projects;
