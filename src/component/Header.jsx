import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

function Header() {
  const { name, imgsrc } = GlobalContext();
  return (
    <>
      <MainHeader>
        <div className="header-content">
          <h1>
          {name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            molestias quod soluta ullam quae! Cumque consequatur dolor officiis
            eius ipsam a ab, omnis illo exercitationem iure sed vel ut
            dignissimos.
          </p>
          <Button>
            <NavLink to="/">See More</NavLink>
          </Button>
        </div>
        <div className="header-image">
          <img src={imgsrc} alt="" />
        </div>
      </MainHeader>
    </>
  );
}

const MainHeader = styled.header`
  width: 80%;
  margin:20vh auto;
  gap: 30px;
  display: flex;
  align-items: center;

  .header-image {
    width: 50%;
  }
  .header-content {
    width: 50%;

    h1 {
      font-size: 3rem;
    }

    p {
      margin: 20px 0;
      font-size: 18px;
    }
  }
`;

export default Header;
