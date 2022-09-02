import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide , SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch("https://digimon-api.herokuapp.com/api/digimon");
    const data = await api.json();
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(data[i]);
    }
    setPopular(array);
  };

  return (
    <div>
      <Wrapper>
        <h3> Popular Picks </h3>
        <Splide options = {{
          perPage:4,
        }}>

        {popular.map((recipe) => {
          return (
            <SplideSlide>
            <Card>
              <p>{recipe.name}</p>
              <img src={recipe.img} alt={recipe.name} />
            </Card>
            </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
min-height= 25rem;
border-radius:2rem
overflow: hidden;
background-color:red;
padding:1rem;
margin:1rem;
width:fit-content;
img{
  border-radius:50%;
}

`;

export default Popular;
