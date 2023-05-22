import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let initaileState = {
    name: "",
    imgsrc: "",
  };

  const updateHomePage = () => {
    return dispatch({
      type: "HOME-UPDATE",
      payload: {
        name: "Wellcome to our site ",
        imgsrc: "./images/37.jpg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT-UPDATE",
      payload: {
        name: "About Us",
        imgsrc: "./images/37.jpg",
      },
    });
  };
 

  const [state, dispatch] = useReducer(reducer, initaileState);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, GlobalContext };
