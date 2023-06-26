import React from "react";
import AdminHeader from "./AdminHeader";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminUser from "./AdminUser";
import AdminEditUser from "./AdminEditUser";

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div id="main" style={{ padding: "110px 50px 50px 250px" }}>
        {children}

        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/users" element={<AdminUser />} />
          <Route path="/users/edit/:id" element={<AdminEditUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
