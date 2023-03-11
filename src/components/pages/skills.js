import React from "react";


const Skills = () => {
  return (
    <div class="centered">
      <h2 style={{ fontSize: "50px" }}>Skills</h2>
      
      <ul class="centered" style={{ paddingBottom: "3%" }}>
        <img style={{ height:"150px", width:"150px", paddingRight:"5px" }} src="../images/react.jpg" alt="The logo icon for react" title="React"></img>
        <img style={{ height:"150px", width:"150px", paddingRight:"5px"}} src="../images/react.jpg" alt="The logo icon for CSS3" title="CSS 3"></img>
        <img style={{ height:"150px", width:"150px", paddingRight:"5px"}} src="../images/react.jpg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"></img>
      <img style={{ height:"150px", width:"150px", paddingRight:"5px"}} src="../images/react.jpg" alt="The logo icon for GitHub" title="GitHub"></img>
      <img style={{ height:"150px", width:"150px", paddingRight:"5px"}} src="../images/react.jpg" alt="The logo icon for NPM" title="NPM"></img>
      <img style={{ height:"150px", width:"150px", paddingRight:"5px"}} src="../images/react.jpg" alt="The logo icon for NodeJS" title="Node JS"></img>

    </ul>
    <p>Creating web and mobile applications <br />
Maintaining, optimizing, troubleshooting, and improving websites<br /> 
Implementation of apps and landing pages from concept through deployment <br /></p><br />
    </div >
    
  );
};

export default Skills;