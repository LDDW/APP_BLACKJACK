import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Suppression du token dans le localStorage
    localStorage.clear();

    // Redirection de l'utilisateur vers la page d'accueil
    navigate("/");

    window.location.reload();
  };

  return <button onClick={handleLogout}>Déconnexion</button>;
};

export default LogoutButton;
