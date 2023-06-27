import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "../../assets/logoSite.png";
import LogoutButton from "./Authentication/Logout";
import connectedUser from "./Authentication/ConnectedUser";

const Header = () => {
  interface User {
    id: number;
    email: string;
    username: string;
    roles: string[];
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await connectedUser();
      setUser(userData.user);
    };

    fetchUser();
  }, []);

  console.log(user);

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
          {!user && (
            <li>
              <Link to={"/auth"} className="nav-link">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>
          )}
          {user && (
            <li>
              <LogoutButton />
            </li>
          )}
          {user && user.roles.includes("ROLE_ADMIN") && (
            <li>
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

