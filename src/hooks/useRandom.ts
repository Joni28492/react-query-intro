import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromApi = async():Promise<number> => {

    const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const numberString = await resp.text();
  
    // throw new Error("Auxilio!!")//lo intenta un par de veces y si no puede nos manda el error
    return +numberString
  
  }
  

export const useRandom = () => {

    const query = useQuery(//no es recomendable desestructurar, mejor nombre descriptivo
        ['randomNumber'],//como manejaremos nuestro cache
        getRandomNumberFromApi, //aqui va la funcion
    );

    return query;
}