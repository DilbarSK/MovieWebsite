import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">LOGO</NavLink>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="icons">
        <span className="show icon ">💠</span>
        <span className="hide icon ">❌</span>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .menu {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .icons {
    display: none;
  }
  .icon {
    display: none;
  }
  @media (max-width: "768px") {
    .menu {
      transform:translateX(100% )
      display:none;
      flex-flow : column;
      align-items: center;
      gap: 20px;
    }
}
`;

export default Navbar;
