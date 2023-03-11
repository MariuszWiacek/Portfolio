

function Header() {
    return <nav class="navbar navbar-expand-lg"  style={{borderBottom:"1px solid white"}}>
    <div class="container-fluid" style={{borderBottom:"1px white"}}>
      <a class="navbar-logo" href="#" >&#123;&#123;  Mariusz-Portfolio  &#125;&#125;</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/skills">My Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={"#/HireMe"}>Hire me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/CV">CV</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
}
  
  export default Header;