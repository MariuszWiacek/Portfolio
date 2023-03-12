import React from "react";
import myResume from "https://drive.google.com/file/d/1_Wn25qeTscIHbRt_DzlKggkDEQOf5MEr/view?usp=share_link";

const CV = () => {
  return (
    <section id="welcome-section" className="download-intro">
      <div className="flex-row" >
        <h2 className="section-title primary-border" style={{ fontSize: "50px", borderBottom:"1px solid white" }}>My Resume</h2>
      </div>
      <div className="flex-row" >
        <div className="download-info">
          <div className="download-text" >
            <a href={myResume} download>
              <button class="bi bi-file-earmark-person-fill"></button><br /><br /><br />
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