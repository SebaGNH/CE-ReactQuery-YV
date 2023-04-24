import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchSHID = async (heroID) => {
  return await axios.get(`http://localhost:5001/superHeroes`);
}


export const useSHeroData = (heroID) => {
  return useQuery(['super-hero-id', heroID], () => fetchSHID(heroID))
}


export const use05QueryID = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSHID, {
    onSuccess: onSuccess, // Manejo de errores
    onError, // ambos se pueden simplificar

    // Transformación de datos
    //select: (data) => {
    //  const superHeroNames = data.data.map( (hero) => hero.name);
    //  return superHeroNames;
    //}
  });
}