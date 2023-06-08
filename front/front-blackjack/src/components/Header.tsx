import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/admin"} className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
