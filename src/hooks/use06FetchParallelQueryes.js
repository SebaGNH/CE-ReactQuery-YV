import { useQuery } from 'react-query';
import axios from 'axios';


const fetchSuperHeroesData = () => {
  return axios.get(`http://localhost:5001/superHeroes`);
}

const fetchFriendsData = () => {
  return axios.get(`http://localhost:5001/friends`);
}


export const use06FetchParallelQueryesHeroes = () => {
  return useQuery('super-heroes-data', fetchSuperHeroesData);
}

export const use06FetchParallelQueryesFriends = () => {
  return useQuery('super-friends-data', fetchFriendsData);
}