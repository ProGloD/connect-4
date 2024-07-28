import { Board, Cell, Colors, GameState, Player, Row } from "../types";
import { COLUMNS, ROWS } from "./constants";

function createBoard(): Board {
  const board: Board = Array.from({ length: ROWS },
    (): Row => Array.from({ length: COLUMNS },
      (): Cell => ({
        color: Colors.White,
        filled: false
      })));

  return board;
}

export function initGame(): GameState {
  return {
    board: createBoard(),
    turn: Colors.Red,
    winner: null,
    gameOver: false,
    draw: false
  }
}


function checkLine(a: Colors, b: Colors, c: Colors, d: Colors) {
  return a !== Colors.White && a === b && a === c && a === d;
}

function vertical(board: Board): boolean {
  for (let i = board.length - 1; i >= 4; i--) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j].color,
          board[i - 2][j].color,
          board[i - 3][j].color
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

function horizontal(board: Board): boolean {
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[i].length - 3; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i][j + 1].color,
          board[i][j + 2].color,
          board[i][j + 3].color
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

function diagonalRight(board: Board): boolean {
  for (let i = board.length - 1; i >= 3; i--) {
    for (let j = 0; j < board[i].length - 3; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j + 1].color,
          board[i - 2][j + 2].color,
          board[i - 3][j + 3].color
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

function diagonalLeft(board: Board): boolean {
  for (let i = board.length - 1; i >= 3; i--) {
    for (let j = board[i].length - 1; j >= 3; j--) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j - 1].color,
          board[i - 2][j - 2].color,
          board[i - 3][j - 3].color
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

export function checkWinner(board: Board): boolean {
  return (
    vertical(board) ||
    horizontal(board) ||
    diagonalRight(board) ||
    diagonalLeft(board)
  );
}

export function checkDraw(board: Board): boolean {
  return board.every(row => row.every(cell => cell.filled))
}

export function insertToken(board: Board, column: number, color: Player): Board {
  const newBoard = structuredClone(board);

  for (let i = newBoard.length - 1; i >= 0; i--) {
    if (!newBoard[i][column].filled) {
      newBoard[i][column].color = color;
      newBoard[i][column].filled = true;
      break;
    }
  }
  return newBoard;
}

export function isColumnFull(board: Board, column: number): boolean {
  for (let i = board.length - 1; i >= 0; i--) {
    if (!board[i][column].filled) {
      return false;
    }
  }

  return true;
}