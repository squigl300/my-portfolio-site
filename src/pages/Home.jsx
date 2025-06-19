// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <img 
        src="/profile-placeholder.png" // Replace with a real photo of yourself!
        alt="A professional headshot of Sean Quigley" 
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-color)', marginBottom: '1.5rem' }} 
      />
      <h1>Sean Quigley</h1>
      <h2>Graduate AI Engineer | BSc (Hons) Computing</h2>
      <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
        A recent Computer Science graduate with a passion for building responsible and impactful AI solutions. I specialise in Natural Language Processing and Machine Learning, with a keen interest in applying technology to solve complex challenges in the public sector. My goal is to use my skills in Python, React, and cloud platforms to contribute to projects that make a genuine difference.
      </p>
      <p style={{ marginTop: '2rem' }}>
        This portfolio showcases my key academic projects, from developing AI chatbots to designing scalable system architectures.
      </p>
    </div>
  );
};

export default Home;
