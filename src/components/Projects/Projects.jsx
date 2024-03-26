import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';

import './Projects.scss';

const projects = [
  {
    title: "Projet O'Fourno",
    description: "Projet de fin d'études réalisé avec React et Symfony",
    image: '/images/ofourno.png',
    link: 'https://front.prodjason.site/',
  },
  {
    title: 'Projet Le Bercail',
    description: "Projet de création d'une application web d'un restaurant",
    image: '/images/lebercail.png',
    link: 'https://lebercail-allos.fr/',
  },
];

export default function ProjectsList() {
  return (
    <div className="projects-card">
      <div className="title-projects">
        <h1>Mes Projets</h1>
      </div>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={12} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
