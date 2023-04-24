import { useParams } from "react-router-dom"
import { useSHeroData5 } from "../hooks/useSHeroData5"

export const RQ_05_superHero = () => {
  const {heroid} = useParams();
  const {isLoading, data, isError, error} = useSHeroData5(heroid);


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}


/* - {data?data.alterEgo } */