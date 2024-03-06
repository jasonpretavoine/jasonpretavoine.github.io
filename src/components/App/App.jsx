import React, { useState } from 'react';
import './App.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import User from '../User/User';
import Skills from '../Skills/Skills';
import Profil from '../Profil/Profil';
import FormationsExperiences from '../Formations/FormationsExperiences';
// eslint-disable-next-line import/no-named-as-default
import DarkMode from '../DarkMode/DarkMode';

function App() {
  const [value, setValue] = useState(0);

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
            value={value}
            aria-label="icon label tabs example"
          >
            <Tab icon={<HomeIcon />} label="ACCUEIL" />
            <Tab icon={<ContactPageIcon />} label="CONTACT" href={<ContactPageIcon />} />
          </Tabs>
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
