import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch("https://digimon-api.herokuapp.com/api/digimon");
      const data = await api.json();
      let array = [];
      for (let i = 0; i < 10; i++) {
        array.push(data[i]);
      }
      localStorage.setItem("veggie", JSON.stringify(array));
      setVeggie(array);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3> Our vegiterian picks </h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.name}</p>
                  <img src={recipe.img} alt={recipe.name} />
                  <Gradient />
                  </Link>
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
  padding: 1rem;
  background-color: grey;
`;

const Card = styled.div`
border-radius:2rem
overflow: hidden;
height: 25rem;
padding:1rem;
border-radius:2rem;
img{
  border-radius:2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index:10;
  left:50%;
  bottom: 0%;
  transform: translate(-50% , 0%);
  color:blue;
  width:100%;
  text-align: center;
  font-size:1rem;
  font-weight:600;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba (0, 0, 0, 0.5));
`;

export default Veggie;
