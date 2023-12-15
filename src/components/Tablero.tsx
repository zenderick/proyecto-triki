
import { Cuadrado } from './Cuadrado';

interface TableroProps {
  tablero: string[];
  update: (index: number) => void;
  turno: string;
}

export const Tablero =({ tablero, update, turno }: TableroProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-900">
      {tablero.map((objeto, index) => (
        <Cuadrado key={index} index={index} update={update} turno={turno}>
          {objeto}
        </Cuadrado>
      ))}
    </div>
  );
};
