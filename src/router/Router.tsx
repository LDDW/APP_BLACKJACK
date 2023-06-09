import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AdminDashboard from "../components/admin/AdminDashboard";

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
      {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
    </div>
  );
};

export default Router;