import { createContext, PropsWithChildren, useEffect, useReducer } from 'react';
import { Action, GameState } from '../types';
import { gameReducer, initializer } from '../reducer/gameReducer';

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<Action>;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(gameReducer, null, initializer);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
