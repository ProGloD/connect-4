import { Action, ActionTypes, Colors, GameState } from "../types";
import { checkDraw, checkWinner, initGame, PLAYER_1, PLAYER_2 } from "../utils";

export function initializer(): GameState {
  const gameState = localStorage.getItem('gameState');

  if (gameState) {
    return JSON.parse(gameState) as GameState;
  }

  return initGame();
}

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionTypes.NEW_GAME:
      return initGame();

    case ActionTypes.INSERT_TOKEN: {
      const newState = structuredClone(state);

      for (let i = newState.board.length - 1; i >= 0; i--) {
        const cell = newState.board[i][action.column];

        if (!cell.filled) {
          cell.color = state.turn;
          cell.filled = true;

          newState.moves.push({ row: i, column: action.column, player: state.turn });

          break;
        }
      }

      if (checkWinner(newState.board)) {
        newState.winner = state.turn;
        newState.gameOver = true;
        newState.board.forEach(row => row.forEach(cell => (cell.filled = true)));
      } else if (checkDraw(newState.board)) {
        newState.draw = true;
        newState.gameOver = true;
      } else {
        newState.turn = state.turn === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      }

      return newState;
    }

    case ActionTypes.UNDO: {
      const newState = structuredClone(state);
      const lastMove = newState.moves.pop();

      if (lastMove) {
        const cell = newState.board[lastMove.row][lastMove.column];
        cell.color = Colors.White
        cell.filled = false
        newState.turn = lastMove.player;
      }

      return newState;
    }

    default:
      throw new Error('Unknown action.');
  }
}