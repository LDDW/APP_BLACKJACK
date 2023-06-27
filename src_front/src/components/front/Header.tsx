import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from '../../assets/logoSite.png';
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
          <li>
            <Link to={"/auth"} className="nav-link">
              <i className="fa-regular fa-user"></i>
            </Link>
          </li>
          {/* <li>
            <Link to={"/admin"} className="nav-link">
              Admin
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
