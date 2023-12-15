interface Cuar {
    children: React.ReactNode;
    select?: boolean
  }

  export const CuadradoT = ({ children, select }: Cuar) => {
    return (
      <div className={`p-4 w-24 h-24 flex justify-center items-center text-white mx-auto ${select ? 'bg-blue-500' : ''}`}>
        <span className="text-5xl">{children}</span>
      </div>
    );
  };