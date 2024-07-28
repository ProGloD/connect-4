export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  INSERT_TOKEN = 'INSERT_TOKEN',
}

export type ActionNewGame = {
  type: ActionTypes.NEW_GAME;
}

export type ActionInsertToken = {
  type: ActionTypes.INSERT_TOKEN;
  column: number;
}

export type Action = ActionNewGame | ActionInsertToken;
