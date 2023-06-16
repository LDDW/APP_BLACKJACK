import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "../components/front/Authentication/Auth";
import Header from "../components/front/Header";
import Footer from "../components/front/Footer";
import Home from "../components/front/Home";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />
  
      <Routes>
        <Route path="/" />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/*" element={<AdminController />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      
      <Footer />
      {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
    </div>
  );
};

export default Router;