import React from 'react';

function ProjectCard({ src, link, h3, p, tech }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>Tech : {tech}</p>
    </a>
  );
}

export default ProjectCard;
