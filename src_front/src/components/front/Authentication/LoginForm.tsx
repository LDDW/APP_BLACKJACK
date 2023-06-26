import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";
import { isSet } from "util/types";
import { Console } from "console";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const body = {
      email: `${email}`,
      password: `${password}`,
    };
    const url = "http://localhost:3333/auth/login";

    const login = async (url: string) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'L\'adresse email ou votre mot de passe est incorrect.',
          })
        }
  
        const data = await response.json();
        //enregistrer en session data.token
        localStorage.setItem('token', data.token);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    login(url);
    // alert(`Email: ${email}, Password: ${password}`);
  };
  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm;