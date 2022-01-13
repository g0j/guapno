import classes from '../styles/App.module.css';
import BondTable from './bond/BondTable';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from '../store/auth/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  return (
      <div className={classes.App}>
        <header>
          <p>Привыкай, что тебе завидуют</p>
        </header>
        <BondTable />
      </div>
  );
}

export default App;
