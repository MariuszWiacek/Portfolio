import React from "react";
import myResume from "../images/bcg.jpg";

const CV = () => {
  return (
    <section id="welcome-section" className="download-intro">
      <div className="flex-row" >
        <h2 className="section-title primary-border" style={{ fontSize: "50px" }}>My Resume</h2>
      </div>
      <div className="flex-row" >
        <div className="download-info">
          <div className="download-text" >
            <a href={myResume} download>
              <button class="bi bi-cloud-download"></button><br /><br /><br />
            </a>
            <p class="centered">
              <b>Please feel free to download my CV</b>
            </p>
          </div>
        </div>

      </div>
    </section>)
}





export default CV