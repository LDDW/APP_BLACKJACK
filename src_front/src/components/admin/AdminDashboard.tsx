import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  interface User {
    id: number;
    email: string;
    username: string;
  }
  const [users, setUsers] = useState<User[]>([]);

  const url = "http://localhost:3333/user";
  const logUrl = "http://localhost:3333/auth/login";
  // const deleteUrl = `http://localhost:3333/user/${id}`;
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
      const userList = data;
      console.log(userList);

      setUsers(userList.user); // Mettre à jour l'état avec la liste des utilisateurs
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login(logUrl)
      .then((data) => fetchData(url, data.token))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h2>Tableau de bord</h2>
        <div>
          <p>Nombre d'utilisateurs :</p>
          <span>{users.length}</span>
        </div>
        <div>
          <Link to={`/admin/users/`} className="btn btn-info my-3">
            Liste des utilisateurs
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
