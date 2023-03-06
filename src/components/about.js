import { Link } from "react-router-dom";
import React from "react";
  
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mariusz, 
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h2>
          <h2>
            What about me What about meWhat about meWhat about meWhat about meWhat about meWhat about me
          </h2>
          
         
        </div>
      </div>
      <button>
		{/* Endpoint to route to Home component */}
		<Link to={"../"}>Back</Link>
		</button>
    </section>
    
  );
}
export default About;