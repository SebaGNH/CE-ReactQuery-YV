import { useQuery } from 'react-query';
import axios from 'axios';
import { use06FetchParallelQueryes, use06FetchParallelQueryesFriends } from '../hooks/use06FetchParallelQueryes';

export const RQ_06_ParallelQueryes = () => {

  const { isLoading, data, isError, error, isFetching } = use06FetchParallelQueryes();

  const { isLoading: isLoadingF, data: dataF, isError: isErrorF, error: errorF , isFetching: isFetchingF } = use06FetchParallelQueryesFriends();


  console.log(dataF)

  if (isError) {
    return <h2>{error.message}</h2>
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }



  return (
    <>
    <h2>Parallel Queryes</h2>

    {
      data?.data.map( (heroName) => {
        return <div key={heroName}>{heroName}</div>
      })
    }
    </>
  )
}
