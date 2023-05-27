import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Movie = () => {
  const { movies } = useGlobalContext();
  return (
    <Wrapper>
      <section>
        {movies.map(cur => {
          const {imdbID , Title , Poster , Year} = cur
          let movieName = Title.substring(0,15)
          return (
           <div className="movie" key={imdbID}>
              <p className="title">{movieName.length >= 15 ? `${movieName}...` : movieName}</p>
             <NavLink to={`movie/${imdbID}`}>
             <img src={Poster} alt="..." />
             </NavLink>
              <p className="year">{Year}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
  section {
    margin: 50px auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .movie {
      flex-basis: 30%;
      position: relative;
      height: 450px;
      margin-top: 20px;
      img {
        width: 100%;
        position: absolute;
        top: 0;
        aspect-ratio: 1/1.5;
        left: 0;
        object-fit: cover;
      }
      .title {
        position: absolute;
        z-index: 2;
        background-color: white;
        color: black;
        width: max-content;
        padding: 5px;
      }
      .year {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
`;
export default Movie;
