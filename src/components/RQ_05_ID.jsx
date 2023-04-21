import { useParams } from "react-router-dom"
import { useSHeroData } from "../hooks/useSHeroData"

export const RQ_05_ID = () => {
  const { heroID } = useParams();
  const { isLoading, data, isError, error } = useSHeroData(heroID);

  if (isError) {
    return <h2>{error.message}</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {data?.data.name} - { data?.data.alterEgo}
    </div>
  )
}
