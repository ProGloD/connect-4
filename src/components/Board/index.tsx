import { CSSProperties, useContext } from 'react';
import { GameContext } from '../../provider/GameProvider';
import { insertToken } from '../../reducer/actions';
import { isColumnFull } from '../../utils';

import './index.css';

const Board = () => {
  const {
    state: { board },
    dispatch,
  } = useContext(GameContext);

  const columns = board[0].length;
  const rows = board.length;

  return (
    <div
      style={
        {
          '--columns': columns,
          '--rows': rows,
        } as CSSProperties
      }
    >
      <div className="insert-buttons-container">
        {Array.from({ length: columns }, (_, index) => (
          <button
            className="insert-button"
            key={index}
            onClick={() => dispatch(insertToken(index))}
            disabled={isColumnFull(board, index)}
          >
            Insert
          </button>
        ))}
      </div>

      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <div key={`${rowIndex}${columnIndex}`} className="cell-container">
              <div
                style={{
                  backgroundColor: cell.color,
                }}
                className="cell"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
