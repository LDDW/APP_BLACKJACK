import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light px-5 position-fixed w-100"
      style={{ height: "60px" }}
    >
      <a className="navbar-brand" href="/">
        Blackjack
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;
