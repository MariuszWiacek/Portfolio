import React from 'react';
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import About from './components/about'
import HireMe from './components/hireme'
import CV from './components/CV'
import Skills from './components/skills'



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
          <Route path="CV" element={<CV />} />
          <Route path="HireMe" element={<HireMe />} />
          <Route path="Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;