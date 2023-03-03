import { Link } from "react-router-dom";
import React from "react";
  
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <li>
		{/* Endpoint to route to Home component */}
		<Link to="../">Back</Link>
		</li>
    </div>
    
  );
};
  
export default About;