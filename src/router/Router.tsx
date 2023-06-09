import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/admin/AdminHeader";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/admin/*" element={<AdminController />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
    </div>
  );
};

export default Router;
