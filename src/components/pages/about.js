import React from "react";
import myImg from "../images/pic.jpg";

const About = () => {
  return (
    <div className="jumbotron">
      <div style={{ alignItems: 'center' }}>
        <h1 style={{ fontSize: '60px', marginTop: '5%' }}>About Me</h1>
        <p
          style={{
            width: "75%",
            marginBottom: '5%',
            height: '400px',
            overflowY: 'auto',
            padding: '20px', // Add padding to give space around text
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 50% transparent dark background
            border: '2px solid rgba(0, 0, 0, 0.1)', // Light border around text
            borderRadius: '8px', // Rounded corners for the frame
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          }}
        >
          Hi there, I'm{" "}
          <span style={{ color: 'orange', fontWeight: "700" }}>
            Mariusz Wiacek
          </span>{" "}
          and{" "}
          <span style={{ color: 'orange', fontWeight: "700" }}>
            I'm a front-end developer
          </span>{" "}
          with a passion for building engaging and user-friendly websites.
          <br />
          <br />
          As a developer, I love the challenge of creating designs that not only
          look great but also provide a seamless and intuitive user experience.
          <br />
          <br />
          I'm skilled in HTML, CSS, and JavaScript, and I'm always looking for
          new ways to improve my skills and stay up-to-date with the latest trends
          and technologies.
          <br />
          <br />
          In my free time, I love to explore the great outdoors. Travelling and
          hiking are my favorite activities, and I'm always up for a challenge.
          Whether it's a day hike or a multi-day backpacking trip, I love the
          sense of accomplishment that comes from pushing myself to new limits.
          <br />
          <br />
          Overall, I'm passionate about using my skills as a front-end developer
          to create websites that make a difference in people's lives. Let's work
          together to build something great!
        </p>
      </div>
    </div>
  );
};

export default About;
