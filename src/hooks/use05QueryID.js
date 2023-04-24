import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchSHID = async () => {
  return await axios.get(`http://localhost:5001/superHeroes`);
}



/* Modo ejemplo, no lo uso */
export const use05QueryID = (onSuccess, onError) => {
  return useQuery('super-hero-id', fetchSHID, {
    onSuccess: onSuccess, // Manejo de errores
    onError, // ambos se pueden simplificar

    // Transformación de datos
    //select: (data) => {
    //  const superHeroNames = data.data.map( (hero) => hero.name);
    //  return superHeroNames;
    //}
  });
}/* Modo ejemplo, no lo uso */