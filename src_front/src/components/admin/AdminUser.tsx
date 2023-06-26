import React, { useState, useEffect } from "react";
// TODO : changer le path pour utiliser l'api
import data from "./users.json";
import { Link } from "react-router-dom";

const AdminUser = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("/user");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error(
  //         "Erreur lors de la récupération des utilisateurs : ",
  //         error
  //       );
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  const handleDelete = (id: number) => {
    // logique de suppression d'un utilisateur
  };

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Nom</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <Link
                  to={`/admin/users/edit/${user.id}`}
                  className="btn btn-primary"
                >
                  Éditer
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
