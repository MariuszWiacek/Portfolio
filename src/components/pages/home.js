import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import myImg from "../images/pic.jpg";
import CV from "./CV";
import Skills from "./skills";

const Home = () => {
  return (
    <div className="jumbotron">
      <div style={{ alignItems: 'center' }}>
        <h3 className="animated-heading" style={{ fontSize: '70px', marginTop: '6%' }}>Mariusz Wiacek </h3>
        <h2 style={{ color: "salmon", fontSize: '25px', marginBottom: '4%' }}>Front-End Developer | React | Javascript</h2>

        <p
        >
          "I am a front-end developer with a passion for creating beautiful,
          user-friendly interfaces that make an impact.<br />
          Let's build something great together!"
        </p>

        <p style={{ color: "salmon", fontSize: '20px',  backgroundColor: 'rgba(0, 0, 0, 0.7)',  }}>
          Check out my <a href={Skills}>projects</a> to see how I can bring your next project to life.
        </p>
      </div>

      <div
        className="socializer a sr-64px sr-circle sr-opacity sr-icon-dark sr-bdr-md sr-bdr-dark sr-bg-white sr-pad"
        style={{ justifyContent: 'center' }}
      >
        <span className="sr-email">
          <a href="mailto:wiacek.mariusz@gmail.comsubject=Portfolio%General%Enquire&amp;Portfolio%General%Enqiure" target="_blank" title="Email">
            <i className="fa fa-envelope"></i>
          </a>
        </span>
        <span className="sr-linkedin">
          <a href="https://www.linkedin.com/in/mariusz-wiacek-6a01ab1b/" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </span>
        <span className="sr-github">
          <a href="https://www.github.com/MariuszWiacek" target="_blank" title="Github">
            <i className="fab fa-github"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Home;
