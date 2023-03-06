import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

const HireMe = () => {
  return (
    <div>
      <h2>Hire Me</h2>
      <button>
		{Home}
		<Link to="../">Back</Link>
		</button>
    </div>
    
  );
};
  
export default HireMe;