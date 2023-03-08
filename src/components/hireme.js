import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";

const HireMe = () => {
  return (
    <div class="centered">
      <h2 style={{fontSize:"80px"}}>Hire Me</h2>
      <p class="centered">I am currently accepting new freelance website projects.</p>
      <p>Please use contact form or email me for more information.</p>
      <button class="bi bi-house" style={{}}>
		{Home}
		<Link class="none" to="../">Home</Link>
		</button>
    </div>
    
  );
};
  
export default HireMe;