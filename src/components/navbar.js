import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import resultImg from '../components/images/result.png'; 
import whiteImg from '../components/images/white.png'; 

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [bgImage, setBgImage] = useState(resultImg); 
  const [isToggleOn, setIsToggleOn] = useState(false); 

  const handleNavCollapse = () => {
    setExpanded(false);
  };

  const handleBgToggle = () => {
    const newBgImage = bgImage === resultImg ? whiteImg : resultImg;
    setBgImage(newBgImage);
    document.body.style.backgroundImage = `url(${newBgImage})`;

    
    if (isToggleOn) {
      
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else {
      
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }

    
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="header">
      <Navbar
        style={{ marginRight: '2%' }}
        id="navbarNav"
        expand="lg"
        expanded={expanded}
      >
        <Navbar.Brand
          href="#"
          id="navbar-logo"
          style={{ color: 'orange', marginLeft: '2%', marginRight: '2%' }}
        >
          &#123;&#123; Mariusz-Portfolio &#125;&#125;
        </Navbar.Brand>
        <label className="switch">
          <input type="checkbox" onClick={handleBgToggle} />
          <span className="slider round" style={{ background: isToggleOn ? 'green' : 'red' }}></span>
        </label>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="navbar-collapse justify-content-end"
            id="navbarNav"
            onClick={() => setExpanded(false)}
          >
            <Nav.Link href="#/projects" onClick={handleNavCollapse}>
              Projects
            </Nav.Link>
            <Nav.Link href="#/skills" onClick={handleNavCollapse}>
              Skills
            </Nav.Link>
            <Nav.Link href="#/About" onClick={handleNavCollapse}>
              About
            </Nav.Link>
            <Nav.Link href="#/Contact" onClick={handleNavCollapse}>
              Contact
            </Nav.Link>
            <Nav.Link href="#/CV" onClick={handleNavCollapse}>
              CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
