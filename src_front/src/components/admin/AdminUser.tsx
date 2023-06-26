import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  email: string;
  username: string;
}

const AdminUser = () => {
  // console.log(data);

  // const [users, setUsers] = useState(data);

  // const [users, setUsers] = useState([]);

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
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default AdminUser;
