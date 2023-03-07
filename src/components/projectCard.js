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
        <li style={{ textAlign: 'center', fontSize: '40px', borderBottom: "white"}}>
            {props.name}
          </li>
          <li style={{ textAlign: 'center', fontSize: '15px'}}>
           {props.technologies}
          </li>
          <li style={{ textAlign: 'center', fontSize: '15px'}}>
           {props.description}
          </li>
          <li style={{ textAlign: 'center', fontSize: '20px'}}>

            <a style={{textDecoration: 'none'}} href={props.deployed}>Deployed project</a>

          </li>
          <li style={{ textAlign: 'center', fontSize: '20px', textDecoration: 'none'}}>
            <a style={{textDecoration: 'none'}} href={props.github}>GitHub</a>

          </li>
        </ul>
      
      </div>
      
    </div>
    
      

  );
}


export default ProjectCard;