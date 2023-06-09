import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <main>
      <div className="home-games home-item">

        <div className="title-menu">
          <p>Parties en cours</p>
          <p>Mises</p>
          <p>Joueurs</p>
        </div>

      </div>

      <div className="home-chat home-item">
        <p id="title-chat">Chat en cours de construction</p>
      </div>
    </main>
  );
};

export default Home;
