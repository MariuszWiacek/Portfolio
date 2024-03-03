import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Projects from './components/pages/projectSlider';
import About from './components/pages/about';
import CV from './components/pages/CV';
import Skills from './components/pages/skills';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      
      <div className="mobile-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
