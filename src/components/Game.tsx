import { useContext } from 'react';
import { GameContext } from '../provider/GameProvider';
import Board from './Board';
import { Colors } from '../types';

export const Game = () => {
  const {
    state: { turn, winner, gameOver, draw },
  } = useContext(GameContext);

  return (
    <div className="container mx-auto py-4 flex flex-col gap-y-4 items-center">
      {!gameOver && (
        <p className="text-xl font-bold">
          Turn:
          <span
            style={{
              backgroundColor: turn,
              color: turn === Colors.Red ? 'white' : 'black',
            }}
            className="ml-2 uppercase px-1"
          >
            {turn}
          </span>
        </p>
      )}

      {gameOver && winner !== null && (
        <p className="text-2xl font-bold">
          Winner:
          <span
            style={{
              backgroundColor: winner,
              color: winner === Colors.Red ? 'white' : 'black',
            }}
            className="ml-2 uppercase px-1"
          >
            {winner}
          </span>
        </p>
      )}

      {gameOver && draw && <p className="text-2xl font-bold">Draw!</p>}

      <Board />
    </div>
  );
};
