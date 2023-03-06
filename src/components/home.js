// import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import myImg from "./images/pic.jpg";


const Home = () => {
return (
	<div>
	<h1 style={{color: "white"}}>I'm Mariusz Wiacek, your Web Developer!</h1>
	<div class="socializer a sr-64px sr-circle sr-opacity sr-icon-dark sr-bdr-md sr-bdr-dark sr-bg-white sr-pad"><span class="sr-email"><a href="mailto:wiacek.mariusz@gmail.comsubject=Portfolio%General%Enquire&amp;Portfolio%General%Enqiure" target="_blank" title="Email"><i class="fa fa-envelope"></i></a></span><span class="sr-linkedin"><a href="https://www.linkedin.com/in/mariusz-wiacek-6a01ab1b/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></span><span class="sr-github"><a href="https://www.github.com/MariuszWiacek" target="_blank" title="Github"><i class="fab fa-github"></i></a></span></div>

	

	<img src={myImg} id="pic" alt="mariusz" width="300" height="300"></img>

	<br />
	<ul>
	<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		About me
		</button></Link>
		<Link to="/projects" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		My Projects
		</button></Link>
		<Link to="/contact" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		Contact me
		</button></Link>
		
		
		
	</ul>
	</div>
);
}




	
export default Home;


