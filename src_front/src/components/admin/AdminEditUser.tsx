import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminEditUser = () => {
  interface User {
    id: number;
    email: string;
    username: string;
  }
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();
  console.log(id);

  const url = `http://localhost:3333/user/${id}`;
  const logUrl = "http://localhost:3333/auth/login";
  const body = {
    email: "arthurldh@gmail.com",
    password: "test",
  };

  const login = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la récupération des données."
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async (url: string, token: string) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la récupération des données."
        );
      }

      const data = await response.json();
      const userData = data.user; // Assurez-vous d'extraire les données de l'utilisateur correctement
      setUser(userData); // Mettez à jour l'état avec les données de l'utilisateur
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (url: string, token: string, updatedUser: User) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la mise à jour de l'utilisateur."
        );
      }

      console.log("Utilisateur mis à jour avec succès !");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login(logUrl)
      .then((data) => fetchUser(url, data.token))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      login(logUrl)
        .then((data) => updateUser(url, data.token, user))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div>
        <h2>Édition de l'utilisateur</h2>
        {user ? ( // Vérifiez si les données de l'utilisateur sont disponibles
          <form onSubmit={handleSubmit}>
            {/* On affiche le formulaire pré-rempli avec les informations de l'utilisateur */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nom de l'utilisateur
              </label>
              <input
                type="text"
                className="form-control"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email de l'utilisateur
              </label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
          </form>
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>
    </>
  );
};

export default AdminEditUser;
