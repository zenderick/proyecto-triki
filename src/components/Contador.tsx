import { Turns } from "../constantes/constantes"
import { PartidasData } from "./interfaces";

interface ContadorVictoriasProps {
    partidas: PartidasData;
  }

const Contador = ({partidas}: ContadorVictoriasProps) => {
  return (
    <div className="historial-container bg-gray-900 p-4 rounded-md mr-4">
    <h3 className="text-2xl font-bold mb-2 text-white">Victorias</h3>
    <div className="mt-2 text-white">
      <div>Victorias Jugador {Turns.X}: {partidas.victoriasX}</div>
      <div>Victorias Jugador {Turns.O}: {partidas.victoriasO}</div>
    </div>
  </div>
  )
}

export default Contador