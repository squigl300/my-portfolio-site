// src/pages/Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <div className="page-container">
      <h1>Blog & About</h1>

      {/* --- ABOUT ME SECTION --- */}
      <div className="project-card"> {/* Reusing the card style for a clean look */}
        <h2>About Me</h2>
        <p>
          I'm a tinkerer and problem-solver at heart. My journey into computer science was driven by a fascination with how complex systems work and a desire to build things that help people. Outside of coding, you'll find me playing football, exploring unique video games with innovative designs (like Rain World), or planning my next trip abroad.
        </p>
        <p>
          I'm particularly drawn to Storm ID's mission because it sits at the intersection of challenging technology and public service. The opportunity to work on AI projects that have a measurable, positive impact on society is what truly motivates me.
        </p>
      </div>

      <hr className="section-divider" />

      <h2>Blog Posts</h2>
      
      {/* --- BLOG POST 1 --- */}
      <div className="project-card">
        <h3>Pivoting for Stability: A Key Lesson from my Honours Project</h3>
        <p><strong>Posted: June 19, 2025</strong></p>
        <p>
          One of the most valuable lessons from my final year project wasn't a technical skill, but a strategic one: knowing when to pivot. My initial plan was to use a 7-billion parameter LLM for every part of my personality chatbot, including nuanced analytical tasks like scoring user responses.
        </p>
        <p>
          In practice, I found the model struggled with consistency for these precise tasks. Instead of forcing a solution that wasn't working, I made the call to re-architect. I kept the LLM for generative tasks where it excelled—like personalising questions—and built a more stable, deterministic scoring engine in Python using keyword heuristics. This hybrid approach made the system vastly more reliable. It was a crucial lesson in pragmatism over purism, and a reminder that the best solution is the one that works reliably and robustly.
        </p>
      </div>

      {/* --- BLOG POST 2 (Template) --- */}
      <div className="project-card">
        <h3>The Unseen Importance of Good Architecture</h3>
        <p><strong>Posted: [Future Date]</strong></p>
        <p>
          During our Application Architecture module, we designed a complex e-commerce system from the ground up. It was a fascinating exercise that highlighted how foundational patterns like MVC and Event-Driven Architecture aren't just academic concepts—they are the blueprints for building software that can actually scale and adapt without collapsing under its own weight... 
          [You can continue this post by talking about why separating concerns is important for team collaboration and long-term maintenance.]
        </p>
      </div>

    </div>
  );
};

export default Blog;
