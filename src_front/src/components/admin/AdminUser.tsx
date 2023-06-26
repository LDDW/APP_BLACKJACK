import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  email: string;
  username: string;
}

const AdminUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  const url = "http://localhost:3333/user";
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

  const fetchData = async (url: string, token: string) => {
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
      const userList = data; // Si les utilisateurs sont directement dans data, sans propriété "user"
      console.log(userList);

      setUsers(userList.user); // Mettre à jour l'état avec la liste des utilisateurs
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id: number) => {
    // Logique de suppression d'un utilisateur
  };

  useEffect(() => {
    login(logUrl)
      .then((data) => fetchData(url, data.token))
      .catch((error) => console.log(error));
  }, []);

  console.log(users); // Vérifier l'état users

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Email: {user.email}</p>
              <p>Nom: {user.username}</p>
              <Link to={`/admin/users/edit/${user.id}`} className="btn btn-primary">
                Éditer
              </Link>
              <button onClick={() => handleDelete(user.id)} className="btn btn-danger">
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default AdminUser;
