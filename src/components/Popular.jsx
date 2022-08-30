import { useEffect } from 'react';

function Popular() {

  useEffect(() => {
    getPopular()
  }, []); 


const getPopular = async () => {
const api = await fetch(`GET https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
  const data = await api.text();
  console.log(data);
}



  return  <div>Popular</div>;
  
}

export default Popular