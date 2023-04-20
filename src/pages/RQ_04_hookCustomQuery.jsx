import { useSuperHeroesDataHook } from "../hooks/useSuperHeroesDataHook";

export const RQ_04_hookCustomQuery = () => {

  const onSuccess = (data) => {
    console.log('Data fetching Correcto', data);
  }

  const onError = (error) => {
    console.log('Error fetching', error);
  }


  // React Query
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesDataHook( onSuccess, onError );


  // Condicionales isError, Loading, Fetching
  if (isError) {
    return <h2>{error.message}</h2>
  }
  //console.log({isLoading, isFetching})
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }


  // Return
  return (
    <>
    <h2>RQ Callbacks</h2>

    {
      data.map( (heroName) => {
        return <div key={heroName}>{heroName}</div>
      })
    }
  </>
  )
}

