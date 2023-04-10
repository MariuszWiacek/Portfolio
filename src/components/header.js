import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Projects from '../components/pages/projects';

function Header() {
  return(
<Navbar style={{marginLeft: "2%", marginRight:"2%"}} id="navbarNav" expand="lg">
<Navbar.Brand href="#" id="navbar-logo" style={{marginLeft: "2%", marginRight:"2%"}}>&#123;&#123;  Mariusz-Portfolio  &#125;&#125;</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="navbar-collapse justify-content-end" id="navbarNav">
  <NavDropdown title="Projects" id="basic-nav-dropdown" >
      <NavDropdown.Item href="#/projects">Most Recent</NavDropdown.Item>
      <NavDropdown.Item href="#/projects">All Projects</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#/skills">Skills</Nav.Link>
    <Nav.Link href="#/About">About</Nav.Link>
    <Nav.Link href="#/Contact">Contact</Nav.Link>
    <Nav.Link href="#/CV">CV</Nav.Link>
    
    </Nav>
</Navbar.Collapse>
</Navbar>)
  //   return <nav class="navbar navbar-expand-lg"  style={{borderBottom:"1px solid white"}}>
  //   <div class="container-fluid" style={{borderBottom:"1px white"}}>
  //     <a class="navbar-logo" href="#" >&#123;&#123;  Mariusz-Portfolio  &#125;&#125;</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
  //       <ul class="navbar-nav">
  //         <li class="nav-item">
  //           <a class="nav-link" href="#/skills">My Skills</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href={"#/HireMe"}>Hire me</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#/CV">CV</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  
  
}
  
  export default Header;