import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import ProjectCard from './projectCard';
import projects from './projects.json';

function ProjectsSlider(props) {
  const flickityRef = useRef(null);

  useEffect(() => {
    if (flickityRef.current) {
      const flickityInstance = new Flickity(flickityRef.current, {
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: false,  // Disable autoplay initially
        prevNextButtons: true,
        pageDots: false,
        draggable: false,
        contain: true,
      });

      // Enable autoPlay after 10 seconds
      setTimeout(() => {
        flickityInstance.options.autoPlay = 10000;  // Set to 10 seconds 
        flickityInstance.play();  // Start autoplay
      }, 10000);
    }
  }, []);

  const projectCards = projects.map((project, index) => (
    <div className="carousel-cell" key={index}>
      <ProjectCard
        description={project.description}
        technologies={project.technologies}
        name={project.name}
        image={project.image}
        video={project.video}
        deployed={project.deployed}
        github={project.github}
      />
    </div>
  ));

  return (
    <div className="jumbotron">
      <div className="carousel" ref={flickityRef}>
        {projectCards}
      </div>
    </div>
  );
}

export default ProjectsSlider;
