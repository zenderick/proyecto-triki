import { Winner_combos } from "../constantes/constantes";

export const Checkwin = (check: string[]): string | null  => {
    for(const combo of Winner_combos){
      const [a,b,c] = combo
      if(
        check[a] && 
        check[a] === check[b] &&
        check[a] === check[c]
      )
        return check[a] //saber quien gana porque puede ser "x" o "O"
    }
    if (check.every((square) => square !== "")) {
      return "Empate";
    }
    return null;
  }