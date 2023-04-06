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
  <p style={{ fontSize: '20px' ,  marginBottom: '5%'}}> projects.<br />
  </p></div>
      <div  id="rows">
      <Sliderify>{projectCards}</Sliderify>
      </div>
    
</div>

  );
}

export default ProjectsGallery;