import { Action, ActionTypes, GameState } from "../types";
import { checkDraw, checkWinner, initGame, PLAYER_1, PLAYER_2 } from "../utils";

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionTypes.NEW_GAME:
      return initGame();

    case ActionTypes.PLACE_TOKEN: {
      const newState = structuredClone(state);
      const { row, column } = action.payload;
      const cell = newState.board[row][column];

      if (!cell.filled) {
        cell.color = state.turn;
        cell.filled = true;
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

    default:
      throw Error('Unknown action.');
  }
}