import { useContext } from 'react';
import Board from './components/Board';
import { GameContext } from './provider/GameProvider';
import { newGame } from './reducer/actions';

import './App.css';

function App() {
  const { state, dispatch } = useContext(GameContext);

  const { turn, winner, gameOver, draw } = state;

  return (
    <div className="App">
      <h1 className="title">Connect 4</h1>

      <button
        type="button"
        className="button"
        onClick={() => dispatch(newGame())}
      >
        New Game
      </button>

      <p>{`Turn: ${turn}`}</p>

      <Board />

      {gameOver && winner !== null && <p>{`Winner: ${winner}`}</p>}

      {gameOver && draw && <p>Draw</p>}
    </div>
  );
}

export default App;
