import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" />
        <Route path="/admin/*" element={<AdminController />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Router;
