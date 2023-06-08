import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div id="adminSidebar">
      <ul>
        <li>
          <Link to={"/admin"} className="nav-link">
            Tableau de bord
          </Link>
        </li>
        <li>
          <Link to={"/admin/users"} className="nav-link">
            Utilisateurs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
