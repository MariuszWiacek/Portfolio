import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import About from './components/about'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;