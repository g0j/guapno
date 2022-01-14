import classes from './App.module.css';
import BondTable from './bond/BondTable';
import { Header, Message } from './layout';

function App() {
  return (
      <div className={classes.App}>
        <Header />
        <BondTable />
        <Message />
      </div>
  );
}

export default App;
