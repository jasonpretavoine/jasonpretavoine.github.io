import './Skills.scss';
import Skill from './Skill';
import Interets from '../Interets/Interets';

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating={5} />
        <Skill title="CSS" rating={4} />
        <Skill title="JAVASCRIPT" rating={4} />
        <Skill title="REACT" rating={4} />
        <Skill title="NODE" rating={3} />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating={5} />
        <Skill title="Anglais" rating={3} />
      </div>
      <Interets />
    </>
  );
};

export default Skills;
