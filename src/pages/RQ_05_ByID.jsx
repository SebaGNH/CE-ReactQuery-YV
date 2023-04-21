
import { useQueryID } from "../hooks/useQueryID";
import { Link } from 'react-router-dom';

export const RQ_05_ByID = () => {
  const onSuccess = (data) => {
    console.log('Data fetching Correcto', data);
  }

  const onError = (error) => {
    console.log('Error fetching', error);
  }

  const { isLoading, data, isError, error, isFetching, refetch} = useSHeroData( onSuccess, onError );


  if (isError) {
    return <h2>{error.message}</h2>
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>RQ onClick refetch</h2>

      <button onClick={refetch}> Fetch Heroes</button>

      {
        data?.data.map((hero)=>{
        return (
          <div key={hero.id}>
            <Link to={`/rq-by-id/${hero.id}`}>{hero.name}</Link>
          </div>
        )
        })
      }
    </>
  )
}
