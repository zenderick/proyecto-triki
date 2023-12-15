import NewGameButton from './ButtonReset';

interface MensajeGanadorProps {
  winner: string | null;
  resetGame: () => void;
}

export const MensajeGanador = ({ winner, resetGame }: MensajeGanadorProps) => {
  return (
    <div>
      {/* Modal de mensaje de ganador */}
      {winner !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded-md text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {winner === 'Empate' ? '¡Es un empate!' : `¡Ganaste!`}
            </h2>
            <p className="text-lg mb-4 text-white">
              {winner === 'Empate' ? 'Fue un juego reñido. ¡Buena partida!' : `¡Enhorabuena!`}
            </p>
            <div className="text-4xl">
              {winner === 'Empate' ? '' : `${winner}`}
            </div>
            <NewGameButton resetGame={resetGame} />
          </div>
        </div>
      )}
    </div>
  );
};
