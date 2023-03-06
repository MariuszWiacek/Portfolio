// import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import myImg from "./images/pic.jpg";
import { useState } from 'react';

const Home = () => {
return (
	<div>
	<h1 style={{color: "white"}}>I'm Mariusz Wiacek, your Web Developer!</h1>
	<div class="socializer a sr-64px sr-circle sr-opacity sr-icon-dark sr-bdr-md sr-bdr-dark sr-bg-white sr-pad"><span class="sr-email"><a href="mailto:?subject=Free%20Social%20Media%20Share%20Buttons%20Generator%20-%20Aakash%20Web&amp;body=%20-%20https%3A%2F%2Fwww.aakashweb.com%2Fapps%2Fsocial-buttons-generator%2F" target="_blank" title="Email"><i class="fa fa-envelope"></i></a></span><span class="sr-linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.aakashweb.com%2Fapps%2Fsocial-buttons-generator%2F&amp;title=Free%20Social%20Media%20Share%20Buttons%20Generator%20-%20Aakash%20Web&amp;summary=" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></span><span class="sr-github"><a href="https://www.github.com/" target="_blank" title="Github"><i class="fab fa-github"></i></a></span></div>

	

	<img src={myImg} draggable="true" id="pic" alt="mariusz" width="300" height="300"></img>

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


