import React, { useState } from "react";
// TODO : changer le path pour utiliser l'api
// import data from "./users.json";
import { Link } from "react-router-dom";

const AdminUser = () => {
  // console.log(data);

  // const [users, setUsers] = useState(data);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
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
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Email: {user.email}</p>
            <p>Nom: {user.username}</p>
            <Link
              to={`/admin/users/edit/${user.id}`}
              className="btn btn-primary"
            >
              Éditer
            </Link>
            <button onClick={() => handleDelete} className="btn btn-danger">
              Supprimer
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default AdminUser;
