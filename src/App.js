import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/header';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import About from './components/pages/about';
import CV from './components/pages/CV';
import Skills from './components/pages/skills';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />

      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={500}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="CV" element={<CV />} />
            <Route path="Skills" element={<Skills />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </Router>
  );
}

export default App;
