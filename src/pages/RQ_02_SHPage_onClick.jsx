import { useQuery } from 'react-query';
import { fetchHeroesHelper } from '../helpers/fetchHeroesHelper';

// con "refetch" usado en el onclick podemos peticionar a gusto
export const RQ_02_SHPage_onClick = () => {
  const { isLoading, data, isError, error, isFetching, refetch} = useQuery('super-heroes', fetchHeroesHelper, {

    // peticiona true = default / false desabilita la carga al foco
    enabled: false,

  });
// keepPreviousData: true, refetchOnWindowFocus: false }


  if (isError) {
    return <h2>{error.message}</h2>
  }

  console.log({isLoading, isFetching})
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  return (
    <>
    <h2>RQ onClick refetch</h2>

    <button onClick={refetch}> Fetch Heroes</button>

    {
      data?.data.map((hero)=>{
      return <div key={hero.name}>{hero.name}</div>
      })
    }
  </>
  )
}
