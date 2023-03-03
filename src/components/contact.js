import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <li>
		{/* Endpoint to route to Home component */}
		<Link to="../">Back</Link>
		</li>
    </div>
    
  );
};
  
export default ContactUs;