import './User.scss';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const User = () => (
  <div className="user">
    <Avatar
      alt="Jason pretavoine"
      src="/images/photo.jpg"
      sx={{
        width: 200,
        height: 200,
        justifyContent: 'center',
        display: 'flex',
        margin: 'auto',
      }}
    />
    <h1 className="user__name">Jason PRETAVOINE</h1>
    <p className="user__profession">Développeur FullStack spécialisé ReactJS</p>
    <div className="user__infos">
      <p className="user__info">
        <HomeIcon />
        76480 Saint-Pierre-de-Varengeville
      </p>
      <p className="user__info">
        <EventIcon /> 8 Février 1996
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
      <p className="user__social">
        <a href="https://www.linkedin.com/in/jason-pretavoine/">
          {' '}
          <LinkedInIcon
            sx={{
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </a>
        <a href="https://github.com/jasonpretavoine">
          <GitHubIcon
            sx={{
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </a>
      </p>
    </div>
  </div>
);

export default User;
