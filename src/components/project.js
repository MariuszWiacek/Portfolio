import React from "react";
import { Link } from "react-router-dom";


const Project = () => {
  return (
    <div>
      <h1>Project Page</h1>
      <li>
		{/* Endpoint to route to Home component */}
		<Link to="../">Back</Link>
		</li>
    </div>
    
  );
};
  
export default Project;