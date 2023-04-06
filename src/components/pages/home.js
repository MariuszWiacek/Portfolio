// import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import myImg from "../images/pic.jpg";
import CV from "./CV";
import Skills from "./skills";



const Home = () => {
return (
	<div class="jumbotron">
  
  <div style={{alignItems: 'center'}}>
  <h1 style={{fontSize: '70px', marginTop: '6%'}}>Mariusz Wiacek </h1>
 
  <h2 style={{  color:"whitesmoke", fontSize: '25px' ,  marginBottom: '4%'}}>Front-End Developer, UX/UI Designer</h2>
  <p style={{
	fontSize: '20px' ,
	color: "#FFD700",
	width:"50%",
	fontStyle:"italic",
	marginLeft:"5%", 
	

  }}>
	
	"I am a front-end developer with a passion for creating beautiful, user-friendly interfaces that make an impact.<br />
  Let's build something great together!"<br /></p>
  <p style={{ color:"whitesmoke", fontSize: '20px' }}>Check out my <a href={Skills}>projects</a> to see how I can bring your next project to life.</p>
	
	</div>
	<div class="socializer a sr-64px sr-circle sr-opacity sr-icon-dark sr-bdr-md sr-bdr-dark sr-bg-white sr-pad" style={{justifyContent: 'center'}}><span class="sr-email"><a href="mailto:wiacek.mariusz@gmail.comsubject=Portfolio%General%Enquire&amp;Portfolio%General%Enqiure" target="_blank" title="Email"><i class="fa fa-envelope"></i></a></span><span class="sr-linkedin"><a href="https://www.linkedin.com/in/mariusz-wiacek-6a01ab1b/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></span><span class="sr-github"><a href="https://www.github.com/MariuszWiacek" target="_blank" title="Github"><i class="fab fa-github"></i></a></span></div>
	
	


	<br />
	
		
		
		
	
	</div>
);
}





	
export default Home;


