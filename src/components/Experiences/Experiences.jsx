/* eslint-disable react/no-array-index-key */
import experiencesData from '../../data/experiences';

const Experiences = () => {
  return (
    <div className="cursus mb3">
      <h2 className="h2">Expériences Professionnelles</h2>
      {experiencesData.map((experience, key) => (
        <div className="grid__row" key={key}>
          <div className="grid__item">
            <p className="grid__date">{experience.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">
              {experience.title} - {experience.societe}
            </h3>
            <p className="grid__location">{experience.location}</p>
            <p className="grid__text">{experience.text}</p>
            <ul className="grid__missions">
              {experience.missions.map((mission, k) => (
                <li className="grid_missions" key={k}>
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
