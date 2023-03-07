import React from "react";
import {Link} from "react-router-dom";
import Home from "./home";

const Skills = () => {
  return (
    <div class="centered">
      <h2>Skills</h2>
      <ul class="centered" style={{paddingBottom:"3%"}}>
      <p>HTML, CSS, Javascript</p>
      <p>DOM Manipulation, JSON, AJAX</p>
      <p>Node.js, REACT, Agile</p>
      <p>Problem-Solving</p>
      </ul>
      <button class="bi bi-house">

		<Link class="none" to="../">Home</Link>
		</button>
    </div>
    
  );
};
  
export default Skills;