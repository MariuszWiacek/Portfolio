import React from "react";


const CV = () => {
  return (
    <div class="jumbotron">

      <div >
        <h1 style={{ fontSize: '60px', marginTop: '5%' }}>CV </h1>
   <p>My professional Resume : </p>
        <a href="https://docs.google.com/document/d/1v7ricqiVdlesBmrzpkOX8PomJaN1xn3_/edit?usp=sharing&ouid=106269992883549290468&rtpof=true&sd=true" download>
          <button id="cv" class="bi bi-file-earmark-person"></button>
        </a>
        <p style={{ overflowY: 'auto', width: "30%"}}>

        You can click on the image above to view my full CV, which provides a comprehensive overview of my education, work experience, skills, achievements, and other relevant information. Thank you for your interest!
</p>
      </div>
    </div>
  )
}





export default CV