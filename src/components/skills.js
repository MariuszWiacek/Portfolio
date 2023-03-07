import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>DOM Manipulation</li>
      <li>JSON</li>
      <li>AJAX</li>
      <li>Node.js</li>
      <li>React</li>
      <li>Javascript</li>
      <li>Problem-Solving</li>
      </ul>
      <button class="bi bi-house">

		<Link class="none" to="../">Home</Link>
		</button>
    </div>
    
  );
};
  
export default Skills;