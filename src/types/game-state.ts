import { Board } from "./board";
import { Player } from "./player";

export type GameState = {
  board: Board;
  turn: Player;
  winner: Player | null;
  gameOver: boolean;
  draw: boolean;
}