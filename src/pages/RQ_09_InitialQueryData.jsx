import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const fetchSuperHero = ({queryKey}) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:5001/superHeroes/${heroId}`);
}

// Simulamos un hook personalizado
const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], () => fetchSuperHero,{
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')?.data.find(hero => hero.id === parseInt(heroId));
      if (hero){ //Si encuentra heroe
        return { data:hero }
      }
      else { return undefined }
      }
  })
}



/* RETURN */
export const RQ_09_InitialQueryData = () => {

  const heroId = useParams();
  const { data } = useSuperHeroData(heroId);
  console.log(data)

  return (
    <>
      <h2>RQ_09_InitialQueryData</h2>

      {/*
        dataHero?.data.map((hero)=>{
        return (
          <div key={hero.id}>
            <Link to={`/rq-initialquerydata/${hero.id}`}>{hero.name}</Link>
          </div>
        )
        } )
      */}
    </>
  )
}
