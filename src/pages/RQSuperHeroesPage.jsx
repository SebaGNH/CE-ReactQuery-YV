import { useQuery } from 'react-query';
import { fetchHeroesHelper } from '../helpers/fetchHeroesHelper';

export const RQSuperHeroesPage = () => {
  // Llamado api usando RQ, "data" global de "App.js"
  // 'super-heroes' identificador, similar a un "key"
  const { isLoading, data, isError, error, isFetching} = useQuery('super-heroes', fetchHeroesHelper, {
    //Default son 5 minutos
    //cacheTime: 5000, // limpia caché RQ al estar en otro componente

    // Default 0s
    staleTime: 30000, // Cachea 30seg sin hacer nuevas solicitudes a la api al retomar la pestaña "componente", se usa para reducir las solicitudes

  });

  // console.log({isLoading, isFetching})

  if (isError) {
    return <h2>{error.message}</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }


  return (
    <>
      <h2>RQ Super Heros Page</h2>
      {
        data?.data.map((hero)=>{
        return <div key={hero.name}>{hero.name}</div>
        })
      }
    </>
  )
}



