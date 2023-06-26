import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminEditUser = () => {
  interface User {
    id: number;
    email: string;
    username: string;
  }
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();

  const url = `http://localhost:3333/user/${id}`;
  const body = {
    email: "arthurldh@gmail.com",
    password: "test",
  };

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

  const fetchUser = async (url: string) => {
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
      const userData = data.user; // Assurez-vous d'extraire les données de l'utilisateur correctement
      setUser(userData); // Mettez à jour l'état avec les données de l'utilisateur
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (url: string, updatedUser: User) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
      fetchUser(url)
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      Toast.fire({
        icon: "success",
        title: "Utilisateur mis à jour",
      });

      updateUser(url, user)
    }
  };

  return (
    <>
      <div>
        <Link to={`/admin/users`} className="btn btn-light my-3">
          Retour
        </Link>
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
