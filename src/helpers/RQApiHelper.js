import axios from 'axios'

export const RQApiHelper = async () => {
  //Agregar data.data en el map
  //return await axios.get('http://localhost:5001/superHeroes');

  const data = await axios.get('http://localhost:5001/superHeroes');
  //console.log(data)
  //return data.data; // Resumimos en 1 data en el ReactQuery
  return data;
}