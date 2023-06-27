import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminLayout from "./AdminLayout";

const AdminController = () => {
  const url = "http://localhost:3333/user/token";
  const navigate = useNavigate();
  const [roleChecked, setRoleChecked] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        if (!response.ok) {
          // Rediriger l'utilisateur vers la page de connexion
          navigate("/auth");
        } else {
          setRoleChecked(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkRole();
  }, [navigate]);

  return (
    <>
      {roleChecked && (
        <AdminLayout>
          <AdminSidebar />
        </AdminLayout>
      )}
    </>
  );
};

export default AdminController;
