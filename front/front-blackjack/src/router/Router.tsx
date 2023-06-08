import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminRouter from "./admin/AdminRouter";
import Game from "../components/game/Game";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      {pathname.startsWith("/admin") && <AdminRouter />}
    </div>
  );
};

export default Router;
