import { CSSProperties } from 'react';
import { Board as BoardType } from '../../types';

import './index.css';
import { isColumnFull } from '../../utils';

type BoardProps = {
  board: BoardType;
  onTokenInsert: (column: number) => void;
};

const Board = ({ board, onTokenInsert }: BoardProps) => {
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
            onClick={() => onTokenInsert(index)}
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
