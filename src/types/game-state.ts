import { Board } from "./board";
import { Move } from "./move";
import { Player } from "./player";

export type GameState = {
  board: Board;
  moves: Move[];
  turn: Player;
  winner: Player | null;
  gameOver: boolean;
  draw: boolean;
}