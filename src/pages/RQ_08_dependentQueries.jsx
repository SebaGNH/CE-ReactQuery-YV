import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserEmail = async (email) => {
  return await axios.get(`http://localhost:5001/users/${email}`);
}
const fetchCoursesById = async (channelId) => {
  return await axios.get(`http://localhost:5001/channels/${channelId}`);
}

export const RQ_08_dependentQueries = ({email}) => { //Viene de la la ruta
  const { data: userData, isLoading, isError, error, isFetching} = useQuery(['user-email', email], () => fetchUserEmail(email));


  //si el usuario existe, accede a la identificacion del canal
  const channelId = userData?.data.channelId; //sinCanal


  useQuery(['courses',channelId], () => fetchCoursesById(channelId),{
    // después que se obtenga la info de channelId obtenga los detalles
    enabled: !!channelId,
  })
  //console.log(channelId); // sinCanal


  return (
    <>
      <h2>RQ_08_dependentQueries</h2>
      <p>{channelId}</p>
    </>
  )
}


/*
  En Devtools
  ["user-email","correoEjemplo@correo.com"] > Query Explorer > queryKey >
  0: "user-email"
  1: "correoEjemplo@correo.com"


  "["courses",null]" > state "status: "idle" // idle = inactiva


  state > fetchMeta >  acá adentro debería estar la información del fetch, en este caso no llama nada
*/
