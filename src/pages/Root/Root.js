import './Root.css';
import paper from './hand-paper-svgrepo-com.svg';
import rock from './hand-rock-solid-svgrepo-com.svg';
import cissors from './two-fingers-svgrepo-com.svg';
import {Outlet, NavLink } from 'react-router-dom';


function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pierre Papier Ciseau</h1>
        <div className="icons-container">
            <img src={rock} alt="Rock" className="icon icon-svg" id="pierre" />
            <img src={cissors} alt="Cissors" className="icon icon-svg" id="ciseau" />
            <img src={paper} alt="Paper" className="icon icon-svg" id="papier" />
        </div>
        <div>
        <NavLink to="/start-game">
          Commencer
        </NavLink>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}

export default Root;
