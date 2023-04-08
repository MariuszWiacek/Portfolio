import React from 'react';
import ProjectCard from './projectCard';
import projects from './projects.json';
import { Sliderify } from "react-sliderify";

function ProjectsGallery(props) {

  const projectCards = projects.map((project) => (
    <div className="col-md-4 " >
     <ProjectCard
        description={project.description}
        technologies={project.technologies}
        name={project.name}
        image={project.image}
        deployed={project.deployed}
        github={project.github}
      />
    </div>
  ));

  return (
    <div class="jumbotron">
  <div style={{alignItems: 'center'}}>
  <h1 style={{fontSize: '60px', marginTop: '5%'}}>My Projects </h1>
  <p style={{width:"75%" }}> "As a Front-end developer, I have worked on various web development projects that have helped me hone my skills and expertise in creating user-friendly and responsive interfaces. In the Projects section below, you will find a list of some of the projects I have worked on, along with a brief description of each project. These projects demonstrate my ability to create visually appealing and functional websites and applications, while ensuring optimal user experience across multiple devices and platforms."
  </p></div>
      <div  id="rows" >
      <Sliderify>{projectCards}</Sliderify>
      </div>
    
</div>

  );
}

export default ProjectsGallery;