import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminRouter = () => {
  return (
    <div>
      <AdminSidebar />
      <Routes>
        <Route path="/admin" />
        <Route path="/admin/users" />
      </Routes>
    </div>
  );
};

export default AdminRouter;
