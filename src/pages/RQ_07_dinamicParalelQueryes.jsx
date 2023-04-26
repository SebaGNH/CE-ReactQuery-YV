import { useQueries } from 'react-query';
import axios from 'axios';

export const fetchSHID = async (heroID) => {
  return await axios.get(`http://localhost:5001/superHeroes/${heroID}`);
}

//Enviamos en routes los ids
export const RQ_07_dinamicParalelQueryes = ({heroIDs}) => {

  const queryResults = useQueries(
    heroIDs.map( (id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSHID(id)
      }
    })
  );

  console.log(queryResults);
  return (
    <div>Dinamic Parallel Queryes</div>
  )
}
