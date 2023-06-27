import React from "react";

const connectedUser = async () => {
        try {
          const response = await fetch("http://127.0.0.1:3333/user/connected", {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
    
          if (!response.ok) {
            throw new Error(
              "Une erreur est survenue lors de la récupération des données."
            );
          }

          return await response.json();
    
        } catch (error) {
            console.log(error);
        }
}
export default connectedUser