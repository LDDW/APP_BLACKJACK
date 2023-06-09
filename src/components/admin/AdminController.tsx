import React from "react";

import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminLayout from "./AdminLayout";

const AdminController = () => {
  return (
    <>
      <AdminLayout>
        <AdminDashboard />
        <AdminSidebar />
      </AdminLayout>
    </>
  );
};

export default AdminController;
