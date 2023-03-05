import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import About from "./about";

const Home = () => {
return (
	<div>
	<h1 style={{color: "white"}}>I'm Mariusz Wiacek, your Web Developer!</h1>
	<br />
	<img src="https://avatars.githubusercontent.com/u/117862308?v=4"  alt="mariusz" width="300" height="300"></img>

	<br />
	<ul>
	<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		<Link to="/" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		{About}
		ABOUT ME
		</button></Link>
		
		
	</ul>
	</div>
);
};

export default Home;


