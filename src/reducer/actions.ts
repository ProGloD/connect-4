import { ActionPlaceToken, PlaceTokenPayload, ActionNewGame, ActionTypes } from "../types";

export function newGame(): ActionNewGame {
  return {
    type: ActionTypes.NEW_GAME
  }
}

export function fillCell(payload: PlaceTokenPayload): ActionPlaceToken {
  return {
    type: ActionTypes.PLACE_TOKEN,
    payload
  }
}