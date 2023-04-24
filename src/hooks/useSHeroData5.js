import { useQuery } from 'react-query';
import axios from 'axios'

//Si hay error hace 3 peticiones antes de mostrar el error
export const fetchSHID = async (heroID) => {
  return await axios.get(`http://localhost:5001/superHeroes/${heroID}`);
}


// Mismo método, pero con otra manera de extraer el id
//export const fetchSHID = async ({queryKey}) => {
//  const heroID = queryKey[1]
//  return await axios.get(`http://localhost:5001/superHeroes/${heroID}`);
//}


export const useSHeroData5 = (heroID) => {
  return useQuery(['super-hero-id', heroID], () => fetchSHID(heroID))
}







