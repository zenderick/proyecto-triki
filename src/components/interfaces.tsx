export interface Partida {
    ganador: string;
    movimientosX: number;
    movimientosO: number;
    fecha: string;
    victoriasX: number;
    victoriasO: number;
  }
  
export interface PartidasData {
    victoriasX: number;
    victoriasO: number;
    movimientosX: number;
    movimientosO: number;
    partidas: Partida[];
  }