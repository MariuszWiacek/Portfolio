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
        <li style={{ textAlign: 'left', fontSize: '40px', borderBottom: "white"}}>
            {props.name}
          </li>
          <li style={{ textAlign: 'left', fontSize: '15px'}}>
           {props.technologies}
          </li>
          <li style={{ textAlign: 'left', fontSize: '15px'}}>
           {props.description}
          </li>
          <li style={{ textAlign: 'left', fontSize: '20px'}}>

            <button class="button-53" style={{color:"red", fontSize:"20px", border: '1px solid white'}} href={props.deployed}>Click to check this project</button>

          </li>
          <li style={{ textAlign: 'left', fontSize: '20px', textDecoration: 'none'}}>
            <button class="button-53" style={{color:"red", fontSize:"20px", border: '1px solid white'}} href={props.github}>GitHub Respository</button>

          </li>
        </ul>
      
      </div>
      
    </div>
    
      

  );
}


export default ProjectCard;