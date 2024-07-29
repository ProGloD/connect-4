import { useContext } from 'react';
import { GameContext } from '../provider/GameProvider';
import { insertToken, undo } from '../reducer/actions';
import { Colors } from '../types';
import { isColumnFull } from '../utils';

const Board = () => {
  const {
    state: { board, moves, gameOver, turn },
    dispatch,
  } = useContext(GameContext);

  const columns = board[0].length;
  const rows = board.length;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="grid grid-rows-1 gap-x-2"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }, (_, index) => (
          <button
            key={index}
            className="select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            style={{
              backgroundColor: turn,
              color: turn === Colors.Red ? 'white' : 'black',
            }}
            onClick={() => dispatch(insertToken(index))}
            disabled={isColumnFull(board, index)}
          >
            Insert
          </button>
        ))}
      </div>

      <div
        className="grid border-2 border-black border-solid w-fit"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <div key={`${rowIndex}${columnIndex}`} className="bg-blue-500 p-2">
              <div
                style={{
                  backgroundColor: cell.color,
                }}
                className="w-16 h-16 rounded-full border border-black"
              />
            </div>
          ))
        )}
      </div>

      <button
        type="button"
        className="self-end select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => dispatch(undo())}
        disabled={moves.length === 0 || gameOver}
      >
        Undo
      </button>
    </div>
  );
};

export default Board;
