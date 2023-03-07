import { Link } from "react-router-dom";
import React from "react";
import myImg from "./images/pic.jpg";
  
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div><img src={myImg} style={{ display: 'block', margin: 'auto', }}id="pic" alt="mariusz" width="300" height="300"></img></div>
        <h2>
          I'm learning front-end development and looking to improve my skills to become a Front End Developer.
          </h2>
          
         
        </div>
      </div>
      <button class="bi bi-house">
		{/* Endpoint to route to Home component */}
		<Link to={"../"}>Back</Link>
		</button>
    </section>
    
  );
}
export default About;