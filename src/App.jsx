import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Bounce from './components/bouncing/bounce';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Project from './components/projects/projects';
import Dsa from  './components/dsa/dsa';

function App() {
  return (
    <div className="app">
      <Navbar /> {/* Top Navbar */}
      <div className="content">
        <Bounce /> {/* Below Navbar */}
        <Intro /> {/* Below Bounce */}
        <Skills /> {/* Below Intro */}
        <Project/>
        <Dsa/>
      </div>
    </div>
  );
}

export default App;
