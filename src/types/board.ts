import { Colors } from "./colors";

export type Cell = {
  color: Colors;
  filled: boolean;
};

export type Row = Cell[];

export type Board = Row[];