import { useQuery } from 'react-query';
import axios from 'axios';
import { use06FetchParallelQueryesHeroes} from '../hooks/use06FetchParallelQueryes.js';

const fetchSuperHeroesData = () => {
  return axios.get(`http://localhost:5001/superHeroes`);
}

const fetchFriendsData = () => {
  return axios.get(`http://localhost:5001/friends`);
}

export const RQ_06_ParallelQueryes = () => {

  // Super Heroes Extraido del hook
  const {
    isLoading: isLoadingH,
    data: dataH,
    isError: isErrorH,
    error: errorH,
    isFetching: isFetchingH
  } = use06FetchParallelQueryesHeroes();

    //Friends extraidos de este mismo componente
    const {
    isLoading: isLoadingF,
    data: dataF,
    isError: isErrorF,
    error: errorF,
    isFetching: isFetchingF
  } = useQuery('super-friends-data', fetchFriendsData);





  if (isErrorH) {
    return <h2>{errorH.message}</h2>
  }
  if (isErrorF) {
    return <h2>{errorF.message}</h2>
  }

  if (isLoadingH || isLoadingF) {
    return <h2>Loading...</h2>
  }

  //console.log(dataH?.data)

  return (
    <>
    <h2>Parallel Queryes</h2>

    {
      dataH?.data.map( (hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    {
      dataF?.data.map((friend) => {
        return <div key={friend.id}> {friend.name}</div>
      })
    }
    </>
  )
}
