import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Top_btn() {
  const [btn, setbtn] = useState(false);

  const listenScrollEvent = () => {
    const hideBtn = 250;
    let windowScroll = document.documentElement.scrollTop;

    if (windowScroll > hideBtn) {
      setbtn(true);
    } else {
      setbtn(false);
    }
  };
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener( "scroll", listenScrollEvent)
  }, []);

  return (
    <>
      {btn && (
        <Wrapper>
          <button className="top-btn" onClick={goTop}>
            ^
          </button>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  .top-btn {
    border: none;
    background: none;
    font-size: 2rem;
    line-height: 50px;
  }
`;
export default Top_btn;
