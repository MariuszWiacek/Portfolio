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
    <div>
      <h2 style={{ fontSize: "50px", borderTop:"1px solid white" }}>Projects</h2>
      <p style={{ fontStyle: "italic" }}>All recent projects were built during edX  Front-End Developer Bootcamp</p>
      <div className="row justify-content-center" id="rows">
        {projectCards}
      </div>
    </div>

  );
}

export default ProjectsGallery;