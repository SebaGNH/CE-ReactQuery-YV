# React Query "Demo" usando Vite y Yarn  CodeEvolution

<!--
https://www.youtube.com/watch?v=Nm0inP3B_zs&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=2


// Llamado a la api v1
const { isLoading, data} = useQuery('super-heroes', () => {
  return axios.get('http://localhost:5001/superHeroes');
})

//Repo Git
https://github.com/gopinav/React-Query-Tutorials/blob/master/react-query-demo/src/components/SuperHeroes.page.js

-->

## JSON Server   https://www.npmjs.com/package/json-server
yarn add json-server

## Package.json > Scripts
"backend": "json-server --watch src/api/dataApi.json --port 5001",

yarn backend

- Resources
http://localhost:5001/superHeroes


## React router dom
yarn add react-router-dom

## Axios
yarn add axios

## React Query
yarn add react-query




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
    }, 1500);
  }, [])