import axios from 'axios'

export const RQApiHelper = () => {
  return axios.get('http://localhost:5001/superHeroes');
}