import { useReducer } from 'react';
import Board from './components/Board';
import { fillCell, newGame } from './reducer/actions';
import { gameReducer } from './reducer/gameReducer';
import { initGame } from './utils';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(gameReducer, initGame());

  const { board, turn, winner, gameOver, draw } = state;

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

      <Board
        board={board}
        onCellClick={(row: number, column: number) =>
          dispatch(fillCell({ row, column }))
        }
      />

      {gameOver && winner !== null && <p>{`Winner: ${winner}`}</p>}

      {gameOver && draw && <p>Draw</p>}
    </div>
  );
}

export default App;
