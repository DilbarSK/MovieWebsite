import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Movie from "./Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="movie" element={<Movie/>} /> */}
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
