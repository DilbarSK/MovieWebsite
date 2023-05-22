import React, { useEffect } from "react";
import Header from "../component/Header";
import Contact from "./Contact";
import Services from './Services'
import { GlobalContext } from "../context/context";

function Home() {
  const { updateHomePage } = GlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <Header />
      <Services />
      <Contact />
    </>
  );
}

export default Home;
