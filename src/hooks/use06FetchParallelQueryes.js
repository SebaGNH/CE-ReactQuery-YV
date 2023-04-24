import { useQuery } from 'react-query';
import axios from 'axios';


export const fetchSH = async () => {
  return await axios.get(`http://localhost:5001/superHeroes`);
}
export const fetchFriends = async () => {
  return await axios.get(`http://localhost:5001/friends`);
}




export const use06FetchParallelQueryes = (onSuccess, onError) => {
  return useQuery('super-hero-and-heroes', fetchSH);
}

export const use06FetchParallelQueryesFriends = (onSuccess, onError) => {
  return useQuery('super-hero-and-friends', fetchFriends);
}