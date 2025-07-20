import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Property from "../pages/Property";
import Favorites from "../pages/Favorites";
import NotFoundPage from "../pages/NotFoundPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/property/:id" element={<Property/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;