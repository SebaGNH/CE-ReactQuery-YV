import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserEmail = async (email) => {
  return await axios.get(`http://localhost:5001/users/${email}`);
}
const fetchCoursesById = async (channelId) => {
  return await axios.get(`http://localhost:5001/channels/${channelId}`);
}

export const RQ_08_dependentQueries = ({email}) => {
  //console.log(email)
  const { data: userData, isLoading, isError, error, isFetching} = useQuery('user-email', email, () => fetchUserEmail(email));

  const channelId = userData?.data.channelId;

  useQuery(['courses',channelId], () => fetchCoursesById(channelId),{
    enabled: !!channelId,
  })


  return (
    <div>RQ_08_dependentQueries</div>
  )
}
