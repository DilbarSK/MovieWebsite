import React from "react";
import Services_DATA from "../data/Services_DATA";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../component/Button";

const Services = () => { 

  return (
    <>
      <h1 className="section-heading">Services</h1>
      <Service>
          {Services_DATA.map((curEl ) => {
          const { id, name, imgsrc, text, to } = curEl;

          return (
            <div key={id} className="card">
              <figure>
                <img src={imgsrc} alt={name} />
              </figure>
              <h3 className="title"> {name} </h3>
              <p className="card-info"> {text} </p>

              <Button className="btn">
                <NavLink to={to} >See More</NavLink>
              </Button>
            </div>
          );
        })}
      </Service>
    </>
  );
};

const Service = styled.section`
  width: 70%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    max-width: 30%;
    margin-top: 10px;
    border-bottom: 2px solid gray;

    p {
      margin: 5px 0;
    }

    img {
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }
    .btn {
      margin: 10px 0;
    }
  }
`;
export default Services;
