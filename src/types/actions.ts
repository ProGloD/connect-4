export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  PLACE_TOKEN = 'PLACE_TOKEN',
}

export type ActionNewGame = {
  type: ActionTypes.NEW_GAME;
}

export type PlaceTokenPayload = {
  row: number
  column: number
}

export type ActionPlaceToken = {
  type: ActionTypes.PLACE_TOKEN;
  payload: PlaceTokenPayload;
}

export type Action = ActionNewGame | ActionPlaceToken;
