import React from "react";
import "./App.css";

function GameComponent() {
  let game = [];

  for (let i = 0; i < game.length; i++) {
    game.push(
      <a href="/" className="title-menu">
        {/* TODO récupérer l'id ou le nom de la partie */}
        <p>6644664</p>
        {/* récupérer les mises de la partie */}
        <p>20/50 €</p>
        {/* récupérer le nombre de joueur de la partie */}
        <p>5</p>
      </a>
    );
  }

  return <>{game}</>;
}

const Home = () => {
  return (
    <main>
      <div className="home-games home-item">
        <div className="title-menu" id="top-games">
          <p>Parties en cours</p>
          <p>Mises</p>
          <p>Joueurs</p>
        </div>

        <GameComponent />

        {/* TODO supprimer les quatre div ci-dessous lorsque la fonction GameComponent sera fonctionnel */}

        <a href="/" className="title-menu game-item">
          <p>6644664</p>
          <p>20/50 €</p>
          <p>5</p>
        </a>

        <a href="/" className="title-menu game-item">
          <p>b3dev_test</p>
          <p>2/10 €</p>
          <p>7</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>121278</p>
          <p>50/100 €</p>
          <p>7</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>z3rod_56</p>
          <p>40/60 €</p>
          <p>6</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>6644664</p>
          <p>20/50 €</p>
          <p>5</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>b3dev_test</p>
          <p>2/10 €</p>
          <p>7</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>121278</p>
          <p>50/100 €</p>
          <p>7</p>
        </a>
        <a href="/" className="title-menu game-item">
          <p>z3rod_56</p>
          <p>40/60 €</p>
          <p>6</p>
        </a>
      </div>

      <div className="home-chat home-item">
        <p id="title-chat">Chat en cours de construction</p>
      </div>
    </main>
  );
};

export default Home;
