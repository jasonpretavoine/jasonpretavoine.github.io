import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Interests = () => {
  return (
    <div className="skills">
      <h2 className="h2">Centres d&apos;intérêts</h2>
      <ul>
        <li>Moto</li>
        <li>Séries & Films</li>
        <li>Sports</li>
      </ul>
      <div className="interests">
        <TwoWheelerIcon style={{ fontSize: 40 }} />
        <LocalMoviesIcon style={{ fontSize: 40 }} />
        <FitnessCenterIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Interests;
