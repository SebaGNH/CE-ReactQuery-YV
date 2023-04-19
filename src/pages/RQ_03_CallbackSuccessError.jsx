import { useQuery } from 'react-query';
import { fetchHeroesHelper } from '../helpers';

export const RQ_03_CallbackSuccessError = () => {
  const onSuccess = (data) => {
    console.log('Data fetching Correcto', data);
  }

  const onError = (error) => {
    console.log('Error fetching', error);
  }

  // React Query
  const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchHeroesHelper, {
    onSuccess: onSuccess, // Manejo de errores
    onError, // ambos se pueden simplificar

    // Transformación de datos
    select: (data) => {
      const superHeroNames = data.data.map( (hero) => hero.name);
      return superHeroNames;
    }
  });


  // Condicionales isError, Loading, Fetching
  if (isError) {
    return <h2>{error.message}</h2>
  }
  // console.log({isLoading, isFetching})
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }


  // Return
  return (
    <>
    <h2>RQ Callbacks</h2>

    { // data hace referencia a superHeroNames
      data.map( (heroName) => {
        return <div key={heroName}>{heroName}</div>
      })
    }
  </>
  )
}

