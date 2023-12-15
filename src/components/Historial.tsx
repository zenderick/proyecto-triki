import React from 'react';
import { PartidasData } from './interfaces';

interface HistorialPartidasProps {
  partidas: PartidasData;
  historialRef: React.RefObject<HTMLDivElement>;
  clearHistory: () => void;
}

export const HistorialPartidas = ({ partidas, historialRef, clearHistory }: HistorialPartidasProps) => {
  return (
    <div className="container bg-gray-900 p-4 rounded-md ml-4" ref={historialRef} style={{ flex: "1 0 200px", flexDirection: "column", maxHeight: "400px", overflowY: "auto" }}>
      <h3 className="text-2xl font-bold mb-2 text-white">Historial de Partidas</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {partidas.partidas.map((partida, index) => (
          <li key={index} className="text-white mb-2">
            <div>Ganador: {partida.ganador === 'Empate' ? 'Empate' : partida.ganador}</div>
            <div>Movimientos Jugador X: {partida.movimientosX}</div>
            <div>Movimientos Jugador O: {partida.movimientosO}</div>
            <div>Fecha: {partida.fecha}</div>
          </li>
        ))}
      </ul>
      <button onClick={clearHistory} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
        Limpiar Historial
      </button>
    </div>
  );
};
