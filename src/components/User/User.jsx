import './User.scss';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import GitHubIcon from '@mui/icons-material/GitHub';

const User = () => {
  return (
    <div className="user">
      <img src="./media/avatar.png" alt="" className="user__avatar" />
      <h1 className="user__name">Jason PRETAVOINE</h1>
      <p className="user__profession">Développeur FullStack</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          122 Route du Paulu, 76480, Saint-Pierre-de-Varengeville
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33605395421">06 05 39 54 21</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:pretavoine.jason@gmail.com">
            pretavoine.jason@gmail.com
          </a>
        </p>
        <p className="user__info">
          <GitHubIcon />
          <a href="https://github.com/jasonpretavoine">GitHub</a>
        </p>
        <p className="user__info">
          <EventIcon /> 8 Février 1996
        </p>
      </div>
    </div>
  );
};

export default User;
