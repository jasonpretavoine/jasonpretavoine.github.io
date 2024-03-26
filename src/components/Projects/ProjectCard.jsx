import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

export default function ProjectCard({ project }) {
  const handleCardClick = () => {
    window.open(project.link, '_blank'); // Ouvre le lien du projet dans un nouvel onglet
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        '&:hover': { transform: 'scale(1.05)' },
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
