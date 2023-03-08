import React from 'react';
import ProjectCard from './projectCard';
import projects from './projects.json';


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
    <div className="project-container">
      <h2 className="title">RECENT PROJECTS</h2>
      <p></p>
      <div className="row justify-content-center" id="rows">
        {projectCards}
      </div>
    </div>
    
  );
}

export default ProjectsGallery;