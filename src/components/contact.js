import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";



const ContactMe = () => {
  return (
    <div>
      <h2>Contact Me :</h2>
      <button>
		{Home}
		<Link to="../">Back</Link>
		</button>
    </div>
    
  );
};
  
export default ContactMe;