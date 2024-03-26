import React, { useState } from 'react';
import './App.scss';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import User from '../User/User';
import Skills from '../Skills/Skills';
import Profil from '../Profil/Profil';
import FormationsExperiences from '../Formations/FormationsExperiences';
// eslint-disable-next-line import/no-named-as-default
import DarkMode from '../DarkMode/DarkMode';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Déterminez l'index de l'onglet en fonction du chemin
  const tabValue =
    {
      '/': 0,
      '/projects': 1,
      '/contact': 2,
    }[location.pathname] || 0;

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/projects');
        break;
      case 2:
        navigate('/contact');
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="icon label tabs example"
          >
            <Tab icon={<HomeIcon />} label="ACCUEIL" />
            <Tab icon={<FolderSharedIcon />} label="PROJETS" />
            <Tab icon={<ContactPageIcon />} label="CONTACT" />
          </Tabs>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Profil />
                  <FormationsExperiences />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
