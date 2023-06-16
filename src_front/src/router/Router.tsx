import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "../components/front/Authentication/Auth";
import Home from "../components/front/FrontController";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
     
  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/*" element={<AdminController />} />
        <Route path="/game" element={<Game />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    
      {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
    </div>
  );
};

export default Router;