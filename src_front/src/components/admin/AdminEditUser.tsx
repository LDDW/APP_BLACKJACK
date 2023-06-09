import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminEditUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // on récupère les données de l'utilisateur
        const response = await fetch(`/api/users/${id}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Erreur lors du chargemet de l'utilisateur : ", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // on envoie les données de l'utlisateur mises à jour
      await fetch(`/api/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Utilisateur mis à jour avec succès");
      // TODO : redirection
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur : ", error);
    }
  };

  if (!user) {
    return <div>Chargemet en cours..</div>;
  }

  return (
    <>
      <div>
        <h2>Édition de l'utilisateur</h2>
        <form onSubmit={handleSubmit}>
          {/* On affiche le formulaire pré-rempli */}
          <input
            type="text"
            // value={user.username}
            // onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="email"
            // value={user.email}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  );
};

export default AdminEditUser;
