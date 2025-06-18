// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CurrentFocus from './pages/CurrentFocus';
import Blog from './pages/Blog';
import './AppLayout.css'; // We will create this file next

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-projects" element={<Projects />} />
          <Route path="/current-focus" element={<CurrentFocus />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;