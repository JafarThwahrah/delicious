import React, { useEffect , useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link , useParams} from 'react-router-dom';


function Cuisine(){
    const[cuisine, setCuisine] = useState([]);
    let params = useParams();

  const getCuisine = async (name) =>{
    const data = await fetch("https://digimon-api.herokuapp.com/api/digimon");
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

useEffect (()=>{
    getCuisine(params.type);
} , [params.type])

    return <div>

    </div>;
}


export default Cuisine;