import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "../../assets/logoSite.png";
import LogoutButton from "./Authentication/Logout";

const Header = () => {
  const url = "http://localhost:3333/user/token";
  const navigate = useNavigate();
  const [roleChecked, setRoleChecked] = useState(false);
  const [userRole, setUserRole] = useState("");
  const isAuthenticated = localStorage.getItem("token") !== null;

  useEffect(() => {
    const checkRole = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserRole(data.role);
        }
        setRoleChecked(true);
      } catch (error) {
        console.log(error);
      }
    };

    checkRole();
  }, [roleChecked]);

  return (
    <nav id="header">
      <div className="container">
        <div id="title-header">
          <Link to={"/"} className="nav-link">
            <img src={Logo} alt="logo" />
            <h1>Le Black Jack de la Muerte</h1>
          </Link>
        </div>
        <ul id="menu-header">
          {!isAuthenticated && (
            <li>
              <Link to={"/auth"} className="nav-link">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>
          )}
          {roleChecked && userRole === "ROLE_ADMIN" && (
            <li>
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
