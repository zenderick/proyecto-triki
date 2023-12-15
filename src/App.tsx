import { CuadradoT } from './components/CuadradoT';
import { Turns } from './constantes/constantes';
import NewGameButton from './components/ButtonReset';
import { useEstadosIniciales } from './components/states';
import Contador from './components/Contador';
import { Tablero } from './components/Tablero';
import { MensajeGanador } from './components/MensajeGanador';
import { HistorialPartidas } from './components/Historial';


const App = () => {
  const {
    tablero,
    turno,
    winner,
    historialRef,
    partidas,
    update,
    resetGame,
    clearHistory,
  } = useEstadosIniciales();

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Contador de victorias a la izquierda */}
      <Contador partidas={partidas} />

      {/* Tablero en el centro */}
      <div className="text-center">
        <h1 className="text-3xl text-center mb-2 text-white font-bold">Triki</h1>
        <NewGameButton resetGame={resetGame} />

        <Tablero tablero={tablero} update={update} turno={turno} />


        <div className="grid grid-cols-2 gap-2 my-5 text-center">
          {/* Ajustes de espacio y centrado para CuadradoT */}
          <CuadradoT select={turno === Turns.X}> {Turns.X} </CuadradoT>
          <CuadradoT select={turno === Turns.O}> {Turns.O} </CuadradoT>
        </div>

        <MensajeGanador winner={winner} resetGame={resetGame} />

      </div>

      {/* Historial a la derecha */}
      <HistorialPartidas partidas={partidas} historialRef={historialRef} clearHistory={clearHistory} />

    </div>
  );
};

export default App;
