import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "../../assets/logoSite.png";
import LogoutButton from "./Authentication/Logout";
import connectedUser from "./Authentication/ConnectedUser";

const Header = () => {

  const [user, setUser] = useState(null);
  const userData = connectedUser();
  userData
    .then((response) => {
      setUser(response);
    })
    .catch((error) => { console.log(error) })

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
