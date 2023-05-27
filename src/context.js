import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [movies, setMovie] = useState([]);
  const [isError, setisError] = useState({ show: true, msg: "" });
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("titanic");

  const get_data = async (API_URL) => {
    setisLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.Response === "True") {
        setisLoading(false);
        setMovie(data.Search);
        console.log(data);
        setisLoading(false);
      } else {
        setisError({ show: false, msg: "data not found" });
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let searchTimeOut = setTimeout(() => {
      get_data(`${API_URL}&s=${query}`);
    }, 2000);
    return () => clearTimeout(searchTimeOut);
  }, [query]);

  return (
    <>
      <AppContext.Provider
        value={{ movies, isLoading, isError, query, setQuery }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
