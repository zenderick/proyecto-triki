import React from "react";

interface NewGameButtonProps {
  resetGame: () => void;
}

const NewGameButton: React.FC<NewGameButtonProps> = ({ resetGame }) => {
  return (
    <button
      onClick={resetGame}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-7"
    >
      New Game
    </button>
  );
};

export default NewGameButton;
