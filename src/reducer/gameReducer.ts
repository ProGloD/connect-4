import { Action, ActionTypes, GameState } from "../types";
import { checkDraw, checkWinner, initGame, insertToken, PLAYER_1, PLAYER_2 } from "../utils";

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

      newState.board = insertToken(newState.board, action.column, state.turn);

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

    default:
      throw Error('Unknown action.');
  }
}