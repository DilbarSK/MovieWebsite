import React, { useEffect } from "react";
import Header from "../component/Header";
import { GlobalContext } from "../context/context";

function About() {
  const { updateAboutPage } = GlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return <Header />;
}

export default About;
