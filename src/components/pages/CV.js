import React from "react";


const CV = () => {
  return (
    <section id="welcome-section" className="download-intro">
      <div className="flex-row" >
        <h2 className="section-title primary-border" style={{ fontSize: "50px", borderBottom:"1px solid white" }}>My Resume</h2>
      </div>
      <div className="flex-row" >
        <div className="download-info">
          <div className="download-text" >
            <a href="https://drive.google.com/file/d/1yGb3Iu7HhAmq3j_r95IL_Nx2prJHL-8f/view" download>
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