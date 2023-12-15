interface CuadradoProps {
  children: string;
  update: (index: number) => void;
  index: number;
  turno: string; 
}

export const Cuadrado = ({ children, update, index, turno }: CuadradoProps) => {
  const handleClick = () => {
    update(index);
  };

  return (
    <div onClick={handleClick} className="border border-white p-4 text-center text-white w-24 h-24 flex justify-center items-center">
      <span className="text-6xl">{children}</span>
    </div>
  );
};
