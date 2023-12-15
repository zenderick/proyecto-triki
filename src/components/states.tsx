import { useState, useRef, useEffect } from 'react';
import { Turns } from '../constantes/constantes';
import { Checkwin } from '../logic/Checwin';
import { db } from '../firebase';
import { Partida, PartidasData } from './interfaces';


export const useEstadosIniciales = () => {
  const [tablero, setTablero] = useState<string[]>(Array(9).fill(''));
  const [turno, setTurno] = useState<string>(Turns.X);
  const [winner, setWinner] = useState<string | null>(null);
  const [movimientosX, setMovimientosX] = useState<number>(0);
  const [movimientosO, setMovimientosO] = useState<number>(0);
  const historialRef = useRef<HTMLDivElement>(null);

  const [partidas, setPartidas] = useState<PartidasData>({
    victoriasX: 0,
    victoriasO: 0,
    movimientosX: 0,
    movimientosO: 0,
    partidas: [],
  });

  const update = async (index: number) => {
    if (tablero[index] || winner) return;

    const newBoard = [...tablero];
    newBoard[index] = turno;
    setTablero(newBoard);

    const newTurn = turno === Turns.X ? Turns.O : Turns.X;
    setTurno(newTurn);

    const newMovimientosX = movimientosX + (newTurn === Turns.O ? 1 : 0);
    const newMovimientosO = movimientosO + (newTurn === Turns.X ? 1 : 0);

    setMovimientosX(newMovimientosX);
    setMovimientosO(newMovimientosO);

    const newganador = Checkwin(newBoard);
    if (newganador) {
      setWinner(newganador);
      actualizarContador(newganador, newMovimientosX, newMovimientosO);
    }
  };

  const actualizarContador = async (ganador: string, movimientosX: number, movimientosO: number) => {
    const fecha = new Date().toLocaleString();

    const nuevaPartida: Partida = {
      ganador,
      movimientosX,
      movimientosO,
      fecha,
      victoriasX: ganador === Turns.X ? partidas.victoriasX + 1 : partidas.victoriasX,
      victoriasO: ganador === Turns.O ? partidas.victoriasO + 1 : partidas.victoriasO,
    };

    // Agrega la nueva partida a la colección "partidas" en Firestore
    await db.collection("partidas").add(nuevaPartida);

    setPartidas((prev) => ({
      victoriasX: nuevaPartida.victoriasX,
      victoriasO: nuevaPartida.victoriasO,
      movimientosX: ganador === Turns.X ? prev.movimientosX + movimientosX : prev.movimientosX,
      movimientosO: ganador === Turns.O ? prev.movimientosO + movimientosO : prev.movimientosO,
      partidas: [...prev.partidas, nuevaPartida],
    }));
  };

  const resetGame = () => {
    setTablero(Array(9).fill(''));
    setTurno(Turns.X);
    setWinner(null);
    setMovimientosX(0);
    setMovimientosO(0);
  };

  const clearHistory = async () => {
    // Elimina todas las partidas de Firestore
    const partidaGuardada = await db.collection("partidas").get();
    partidaGuardada.forEach((doc) => {
      doc.ref.delete();
    });

    // Actualiza el estado local
    setPartidas({
      victoriasX: 0,
      victoriasO: 0,
      movimientosX: 0,
      movimientosO: 0,
      partidas: [],
    });
  };

  useEffect(() => {
    const cargarPartidas = async () => {
      // Carga las partidas desde Firestore
      const partidaGuardada = await db.collection("partidas").get();
      const partidasData: Partida[] = [];
      let victoriasX = 0;
      let victoriasO = 0;

      partidaGuardada.forEach((doc) => {
        const data = doc.data() as Partida;
        partidasData.push(data);
        // Actualiza los contadores de victorias
        victoriasX = data.ganador === Turns.X ? victoriasX + 1 : victoriasX;
        victoriasO = data.ganador === Turns.O ? victoriasO + 1 : victoriasO;
      });

      // Actualiza el estado local con las partidas cargadas
      setPartidas({
        victoriasX,
        victoriasO,
        movimientosX: 0,
        movimientosO: 0,
        partidas: partidasData,
      });
    };

    cargarPartidas();
  }, []);

  useEffect(() => {
    // Desplaza automáticamente hacia abajo cuando cambie el historial
    if (historialRef.current) {
      historialRef.current.scrollTop = historialRef.current.scrollHeight;
    }
  }, [partidas.partidas]);

  return {
    tablero,
    setTablero,
    turno,
    setTurno,
    winner,
    setWinner,
    movimientosX,
    setMovimientosX,
    movimientosO,
    setMovimientosO,
    historialRef,
    partidas,
    setPartidas,
    update,
    resetGame,
    clearHistory,
  };
};
