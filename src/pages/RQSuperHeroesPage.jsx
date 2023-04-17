import { useQuery } from 'react-query';
import { RQApiHelper } from '../helpers/RQApiHelper';

export const RQSuperHeroesPage = () => {
  // Llamado api usando RQ, "data" global de "App.js"
  // 'super-heroes' identificador, similar a un "key"
  const { isLoading, data} = useQuery('super-heroes', RQApiHelper);

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



