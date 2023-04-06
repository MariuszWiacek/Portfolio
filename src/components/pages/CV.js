import React from "react";


const CV = () => {
  return (
    <div class="jumbotron">

      <div style={{ alignItems: 'center' }}>
        <h1 style={{ fontSize: '60px', marginTop: '5%' }}>CV </h1>
        <p style={{  marginBottom: '5%' }}>

          <b>Please feel free to download my resume</b>
        </p>
        <a href="https://drive.google.com/file/d/1yGb3Iu7HhAmq3j_r95IL_Nx2prJHL-8f/view" download>
          <button class="bi bi-file-earmark-person-fill"></button>
        </a>

      </div>
    </div>
  )
}





export default CV