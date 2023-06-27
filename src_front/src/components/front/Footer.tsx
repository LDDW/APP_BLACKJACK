import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import connectedUser from "./Authentication/ConnectedUser";
import "./App.css";
import Logo from "../../assets/logoSite.png";

const Footer = () => {
  interface User {
    id: number;
    email: string;
    username: string;
    roles: string[];
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("token")) {
        const userData = await connectedUser();
        setUser(userData.user);
      }
    };

    fetchUser();
  }, []);
  return (
    <footer>
      <nav className="nav-gauche">
        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to={"/comment-jouer"} className="nav-link">
              Comment jouer
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/mentions-legales"} className="nav-link">
              Mentions légales
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={"/"} className="nav-link">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="nav-droite">
        <ul>
          <li>
            <Link to={"/cgu"} className="nav-link">
              CGU
            </Link>
          </li>
          {!user ? (
            <li>
              <Link to={"/auth"} className="nav-link">
                S'inscrire
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/mon-compte"} className="nav-link">
                Mon compte
              </Link>
            </li>
          )}
          <li>
            <Link to={"/faq"} className="nav-link">
              FAQ
            </Link>
          </li>
          <li>
            <Link to={"/mentions-legales"} className="nav-link">
              Plan du site
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
