import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { MovieSingle } from "./MovieSingle";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieSingle />} />
      </Routes>
    </>
  );
};
