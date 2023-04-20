import { useQuery } from 'react-query';
import { fetchHeroesHelper } from '../helpers';

export const useSuperHeroesDataHook = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchHeroesHelper, {
    onSuccess: onSuccess, // Manejo de errores
    onError, // ambos se pueden simplificar

    // Transformación de datos
    select: (data) => {
      const superHeroNames = data.data.map( (hero) => hero.name);
      return superHeroNames;
    }
  });
}