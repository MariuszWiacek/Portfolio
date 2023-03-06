import React from "react";
import "../index.css";


function ProjectCard(props) {
  return (
    
    <div className="card">
      <div className="img-container">
        <img id="img2" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>

<a href={props.deployed}>Deployed project</a>

          </li>
          <li>
          <a href={props.github}>GitHub</a>
   
          </li>
        </ul>
    </div> 
    </div>
    
  );
  
}


export default ProjectCard;