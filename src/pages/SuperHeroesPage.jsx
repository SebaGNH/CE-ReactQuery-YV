import React, { useEffect, useState } from 'react'
import axios from 'axios';
//const resultado = await axios.get(urlAPI);

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      axios
      .get(' http://localhost:5001/superHeroes')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
    }, 500);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {
        data.map( hero => {
        return <div key={ hero.name }> { hero.name } </div>
        })
      }
    </>
  )
}
