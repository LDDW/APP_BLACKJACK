import React, { useEffect, useState } from "react";
import connectedUser from "./Authentication/ConnectedUser";
import "./App.css";

const Account = () => {
  interface User {
    id: number;
    email: string;
    username: string;
    roles: string[];
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("token")) {
        const userData = await connectedUser();
        setUser(userData.user);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      <div>
        <h2>Mon compte</h2>
        {user && (
          <>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
