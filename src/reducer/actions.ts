import { ActionInsertToken, ActionNewGame, ActionTypes, ActionUndo } from "../types";

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

export function undo(): ActionUndo {
  return {
    type: ActionTypes.UNDO
  }
}