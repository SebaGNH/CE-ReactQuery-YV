import axios from 'axios'

// Si hay error hace 3 peticiones antes de mostrar el error
export const fetchHeroesHelper = async () => {
  //Agregar data.data en el map
  //return await axios.get('http://localhost:5001/superHeroes');

  const data = await axios.get('http://localhost:5001/superHeroes');
  //console.log(data)
  //return data.data; // Resumimos en 1 data en el ReactQuery
  return data;
}
