import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminRouter from "./admin/AdminRouter";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {pathname.startsWith("/admin") && <AdminRouter />}
      <Home />
      <Footer />
    </div>
  );
};

export default Router;
