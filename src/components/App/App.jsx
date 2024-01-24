import './App.scss';
import User from '../User/User';
import Skills from '../Skills/Skills';
import Profil from '../Profil/Profil';
import FormationsExperiences from '../Formations/FormationsExperiences';
// eslint-disable-next-line import/no-named-as-default
import DarkMode from '../DarkMode/DarkMode';

function App() {
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
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
