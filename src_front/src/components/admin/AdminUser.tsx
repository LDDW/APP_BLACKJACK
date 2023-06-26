import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminUser = () => {
  interface User {
    id: number;
    email: string;
    username: string;
  }
  const [users, setUsers] = useState<User[]>([]);

  const url = "http://localhost:3333/user";

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la récupération des données."
        );
      }

      const data = await response.json();
      const userList = data;

      setUsers(userList.user); // Mettre à jour l'état avec la liste des utilisateurs
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (deleteUrl: string) => {
    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur est survenue lors de la récupération des données."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id: number) => {
    // Logique de suppression d'un utilisateur
    Swal.fire({
      title: "Etes-vous sûr de vouloir supprimer cet utilisateur ?",
      showCancelButton: true,
      confirmButtonText: "Supprimer",
      cancelButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
            deleteUser(`http://localhost:3333/user/${id}`)
          .catch((error) => console.log(error));
        Toast.fire({
          icon: "success",
          title: "Utilisateur supprimé",
        });
          fetchData(url)
      }
    });
  };

  useEffect(() => {
    fetchData(url)
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>

      {users.length > 0 ? (
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
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <Link
                    to={`/admin/users/edit/${user.id}`}
                    className="btn btn-primary me-2"
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
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default AdminUser;
