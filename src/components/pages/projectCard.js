import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";


function ProjectCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img id="img2" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li style={{ textAlign: 'left', fontSize: '40px', borderBottom: "white" }}>
            {props.name}
          </li>
          <li style={{ textAlign: 'left', fontSize: '15px' }}>
            {props.technologies}
          </li>
          <li style={{ textAlign: 'left', fontSize: '15px' }}>
            {props.description}
          </li>
          <li style={{ textAlign: 'left', fontSize: '20px' }}>

            <Link className="none" to={props.deployed}><button class="button-53" style={{ color: "red", fontSize: "20px", border: '1px solid white', backgroundColor: "#000000d2" }} >Check this project</button></Link>

          </li>
          <li style={{ textAlign: 'left', fontSize: '20px', textDecoration: 'none' }}>
            <Link className="none" to={props.github} ><button class="button-53" style={{ color: "red", fontSize: "20px", border: '1px solid white', backgroundColor: "#000000d2" }}>GitHub Respository</button></Link>

          </li>
        </ul>

      </div>

    </div>



  );
}


export default ProjectCard;