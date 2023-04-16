import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Projects from '../components/pages/projects';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      style={{ marginRight: '2%' }}
      id="navbarNav"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand
        href="#"
        id="navbar-logo"
        style={{ marginLeft: '2%', marginRight: '2%' }}
      >
        &#123;&#123; Mariusz-Portfolio &#125;&#125;
      </Navbar.Brand>
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
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/projects" onClick={handleNavCollapse}>
              Most Recent
            </NavDropdown.Item>
            <NavDropdown.Item href="#/projects" onClick={handleNavCollapse}>
              All Projects
            </NavDropdown.Item>
          </NavDropdown>
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
  );
}

export default Header;
