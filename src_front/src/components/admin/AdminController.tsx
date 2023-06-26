import React from "react";

import AdminSidebar from "./AdminSidebar";
import AdminLayout from "./AdminLayout";

const AdminController = () => {
  return (
    <>
      <AdminLayout>
        <AdminSidebar />
      </AdminLayout>
    </>
  );
};

export default AdminController;
