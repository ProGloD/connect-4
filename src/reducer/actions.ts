import { ActionInsertToken, ActionNewGame, ActionTypes } from "../types";

export function newGame(): ActionNewGame {
  return {
    type: ActionTypes.NEW_GAME
  }
}

export function insertToken(column: number): ActionInsertToken {
  return {
    type: ActionTypes.INSERT_TOKEN,
    column
  }
}