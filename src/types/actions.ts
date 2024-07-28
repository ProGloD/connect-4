export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  INSERT_TOKEN = 'INSERT_TOKEN',
  UNDO = 'UNDO',
}

export type ActionNewGame = {
  type: ActionTypes.NEW_GAME;
}

export type ActionInsertToken = {
  type: ActionTypes.INSERT_TOKEN;
  column: number;
}

export type ActionUndo = {
  type: ActionTypes.UNDO;
}

export type Action = ActionNewGame | ActionInsertToken | ActionUndo;
