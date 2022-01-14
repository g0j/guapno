import { Typography } from '@mui/material';
import classes from './Header.module.css';

function Header() {
  return (
      <div className={classes.container}>
        <Typography variant="h5">Привыкай, что тебе завидуют</Typography>
      </div>
  );
}

export default Header;
