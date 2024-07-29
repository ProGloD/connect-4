import { useContext } from 'react';
import { GameContext } from '../provider/GameProvider';
import { newGame } from '../reducer/actions';

export const Header = () => {
  const { dispatch } = useContext(GameContext);

  return (
    <header className="w-full bg-blue-700 ">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 lg:px-8 mx-4 lg:mx-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-3xl font-bold text-white">Connect 4</span>

            <button
              type="button"
              className="select-none rounded-lg bg-white hover:bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              onClick={() => dispatch(newGame())}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
