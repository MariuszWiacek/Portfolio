import React from "react";


const CV = () => {
  return (
    <div class="jumbotron">

      <div >
        <h1 style={{ fontSize: '60px', marginTop: '5%' }}>CV </h1>
   <p>My professional Resume : </p>
        <a href="https://drive.google.com/file/d/1yGb3Iu7HhAmq3j_r95IL_Nx2prJHL-8f/view" download>
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