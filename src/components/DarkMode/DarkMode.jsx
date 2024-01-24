import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';

import { useEffect, useState } from 'react';

const LIGHT = 'light';
const DARK = 'dark';

export function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? LIGHT);

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const switchTheme = () => {
    if (theme === DARK) {
      document.body.classList.replace(DARK, LIGHT);
      localStorage.setItem('theme', LIGHT);
      setTheme(LIGHT);
    } else {
      document.body.classList.replace(LIGHT, DARK);
      localStorage.setItem('theme', DARK);
      setTheme(DARK);
    }
  };

  return (
    <button type="button" id="darkMode" onClick={switchTheme}>
      {theme === LIGHT ? <Brightness2OutlinedIcon /> : <WbSunnyOutlinedIcon />}
    </button>
  );
}

export default DarkMode;
