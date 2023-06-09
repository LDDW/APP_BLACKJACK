import React, { useState } from "react";
import "../App.css";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // TODO: validate and submit the email, password, username and avatar
    alert(`Email: ${email}, Password: ${password}, Username: ${username}, Avatar: ${avatar}`);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]; // Obtient le premier fichier sélectionné
    if (file) {
      const filePath = URL.createObjectURL(file); // Crée le chemin du fichier à partir de l'objet File
      setAvatar(filePath); // Définit le chemin du fichier dans le state
    }
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
      <div>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange= {(e) => handleFileChange(e)}
        
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default SignupForm;