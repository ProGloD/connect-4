import { CSSProperties } from 'react';
import { Board as BoardType } from '../../types';

import './index.css';

type BoardProps = {
  board: BoardType;
  onCellClick: (row: number, column: number) => void;
};

const Board = ({ board, onCellClick }: BoardProps) => {
  return (
    <div
      style={
        {
          '--columns': board[0].length,
          '--rows': board.length,
        } as CSSProperties
      }
      className="board"
    >
      {board.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <div key={columnIndex} className="cell-container">
            <div
              style={{
                backgroundColor: cell.color,
              }}
              className="cell"
              onClick={() => onCellClick(rowIndex, columnIndex)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
