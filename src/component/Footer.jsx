import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <div className="center">
        <div className="contact-short">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
        <footer>
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              recusandae accusantium esse incidunt.
            </p>
          </div>
          <div className="messege">
            <h3>Suport to get important Infomation.</h3>
            <input type="text" />
            <NavLink>
              <Button>Subscribe</Button>
            </NavLink>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <div>
              <span>🚘</span>
              <span>⚕️</span>
              <span>🏏</span>
            </div>
          </div>
          <div className="call">
            <h3>Call us</h3>
            <p>03XX-XXXXXX</p>
          </div>
        </footer>
        <div className="policy">
          <div>
            (c) 2022 thapaticnichal. All Rightes Reserved. 
          </div>
          <div>
            Privacy & policy
            <br/>
            terms & conditionz
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background: rgb(41, 18, 97);
  margin-top:10vh ;

  .center {
    width: 80%;
    margin: 20px auto;
  }

  .contact-short{
    background-color: rgb(226, 225, 226);
    transform:translateY(-50%) ;
    padding: 20px ;
    border-radius : 10px ;
    display:flex ;
    align-items : center ;
    justify-content: space-between ;  
  }

  footer{
    margin: 50px 0 ; 
    color : white ;
    display:flex ;
    flex-basis:25% ;
    border-bottom : 2px solid white ;

    .messege{

      input{
        padding:5px ;
        margin:10px 0;

      }
    }
    .follow > div{
      display:flex;
    }
  }
  footer > div{
    flex-basis: 25% ;

    h3{
      margin-bottom : 10px ;
    }
  }
  .policy{
    display:flex; 
    align-items:center;
    justify-content : space-evenly ;
    color: white ;
    padding:20px ;
  }
`;
export default Footer;
