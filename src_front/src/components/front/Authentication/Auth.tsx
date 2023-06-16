import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import LoginForm from "./LoginForm";import SignupForm from "./SignUpForm";

const Auth = () => {
  return (
    <main>
        <section id="auth">
            <div className="login">
                <h2>Connexion</h2>
                <LoginForm />
            </div>

            <div className="signUp">
                <h2>Inscription</h2>
                <SignupForm />
            </div> 
        </section>
    </main>
  );
};

export default Auth;