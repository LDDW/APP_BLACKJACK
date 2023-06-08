import React from "react";
import AdminHeader from "./AdminHeader";

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default AdminLayout;
