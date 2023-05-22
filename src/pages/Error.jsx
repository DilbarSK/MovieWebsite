import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/Button";

function Error() {
  return (
    <Wrapper>
      <div className="center">
        <h1>4 zero 4</h1>
        <Button>
          <NavLink to="/">Go Back</NavLink>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .center {
    width:80% ;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align:center ;
    border: 1px solid black ;
    padding : 20px ;
     h1 {
      font-size: 14vw;
    }
  }
`;
export default Error;
