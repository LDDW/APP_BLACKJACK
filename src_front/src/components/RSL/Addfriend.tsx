import React, { useState, useEffect } from "react";

function AddFriends() {
    const [username, setUsername] = useState("");
    const [friendInvitation, setFriendInvitation] = useState<string[]>([]);
    const [acceptedInvitations, setAcceptedInvitations] = useState<string[]>(
        []
    );
    useEffect(() => {
        // Simuler une requête asynchrone pour récupérer les invitations d'amis
        const fetchFriendInvitations = async () => {
            try {
                const response = await fetch(
                    "URL_DE_L_API_POUR_RECUPERER_INVITATIONS"
                );
                const data = await response.json();
                setFriendInvitation(data.invitations);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des invitations d'amis :",
                    error
                );
            }
        };
        fetchFriendInvitations();
    }, []);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // TODO: validate and submit the email and password
        //  alert(`Username: ${username}`);
        setFriendInvitation([...friendInvitation, username]);
        setUsername("");
    };

    const handleAcceptInvitation = (invitation: string) => {
        // Simuler l'acceptation d'une invitation en la supprimant de la liste des invitations et en l'ajoutant à la liste des invitations acceptées
        const updatedInvitations = friendInvitation.filter(
            (inv) => inv !== invitation
        );
        setFriendInvitation(updatedInvitations);
        setAcceptedInvitations([...acceptedInvitations, invitation]);
    };

    return (
        <div>
            <h4>Invitations d'amis</h4>
            <ul>
                {friendInvitation.map((invitation, index) => (
                    <li key={index}>
                        {invitation}
                        <button
                            onClick={() => handleAcceptInvitation(invitation)}
                        >
                            Accepter
                        </button>
                    </li>
                ))}
            </ul>
            <form className="authForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Pseudo:</label>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Envoyer l'invitation</button>
            </form>
            <h5>Invitations acceptées</h5>
            <ul>
                {acceptedInvitations.map((invitation, index) => (
                    <li key={index}>{invitation}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddFriends;
