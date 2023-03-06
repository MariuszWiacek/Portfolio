import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <button>
		{Home}
		<Link to="../">Back</Link>
		</button>
    </div>
    
  );
};
  
export default Skills;