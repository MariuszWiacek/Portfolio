import React from "react";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div>
      <h1>Projects Page</h1>
      <li>
		{/* Endpoint to route to Home component */}
		<Link to="../">Back</Link>
		</li>
    </div>
    
  );
};
  
export default Projects;