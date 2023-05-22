import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <div>SingleMovie id = {id}</div>
      {/* <div className="movie">
        <p className="title">{Title}</p>
        <NavLink to={`movie/${imdbID}`}>
          <img src={Poster} alt="..." />
        </NavLink>
        <p className="year">{Year}</p>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  height: max-content;
  margin: auto;
  background-color: red;
`;
export default SingleMovie;
