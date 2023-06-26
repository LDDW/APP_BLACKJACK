import React from "react";
import { Link } from "react-router-dom";

import Header from "../front/Header";
import Footer from "../front/Footer";
import AddFriends from "./Addfriend";
import AddGroups from "./Addgroup";
import AddToPlay from "./AddToPlay";

const Add = () => {
    return (
        <>
            <Header />
            <main>
                <section id="auth">
                    <div className="login">
                        <h3>Inviter amis</h3>
                        <AddFriends />
                    </div>

                    <div className="signUp">
                        <h3>Inviter dans le groupe</h3>
                        <AddGroups />
                    </div>
                    <div className="signUp">
                        <h3>Inviter à jouer</h3>
                        <AddToPlay />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Add;
