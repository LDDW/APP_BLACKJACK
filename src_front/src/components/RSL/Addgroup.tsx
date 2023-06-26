import React, { useEffect, useState } from "react";

type Group = {
    name: string;
    users: string[];
    invitations: string[];
};

const AddGroups: React.FC = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string>("");
    const [newGroup, setNewGroup] = useState<string>("");
    const [invitationMessage, setInvitationMessage] = useState<string>("");

    useEffect(() => {
        // Simuler une requête asynchrone pour récupérer les groupes existants
        const fetchGroups = async () => {
            try {
                const response = await fetch(
                    "URL_DE_L_API_POUR_RECUPERER_GROUPES"
                );
                const data = await response.json();
                setGroups(data.groups);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des groupes :",
                    error
                );
            }
        };

        fetchGroups();
    }, []);

    const handleCreateGroup = () => {
        // Vérifier si le nom du nouveau groupe a été saisi
        if (newGroup !== "") {
            // Créer un nouveau groupe avec un tableau vide d'utilisateurs et d'invitations
            const newGroupObj: Group = {
                name: newGroup,
                users: [],
                invitations: [],
            };

            setGroups([...groups, newGroupObj]);
            setNewGroup("");
        }
    };

    const handleSendInvitation = () => {
        // Vérifier si un groupe est sélectionné et si un nouveau message d'invitation a été saisi
        if (selectedGroup !== "" && invitationMessage !== "") {
            // Trouver le groupe correspondant dans la liste des groupes
            const group = groups.find((group) => group.name === selectedGroup);
            if (group) {
                // Ajouter la nouvelle invitation au groupe
                const updatedGroup = {
                    ...group,
                    invitations: [...group.invitations, invitationMessage],
                };

                const updatedGroups = groups.map((group) =>
                    group.name === selectedGroup ? updatedGroup : group
                );
                setGroups(updatedGroups);
                setInvitationMessage("");
            }
        }
    };

    const handleAcceptInvitation = (
        groupName: string,
        invitationMessage: string
    ) => {
        // Trouver le groupe correspondant dans la liste des groupes
        const groupIndex = groups.findIndex(
            (group) => group.name === groupName
        );
        if (groupIndex !== -1) {
            // Supprimer l'invitation acceptée du groupe
            const updatedGroups = [...groups];
            const invitationIndex =
                updatedGroups[groupIndex].invitations.indexOf(
                    invitationMessage
                );
            updatedGroups[groupIndex].users.push(invitationMessage);
            if (invitationIndex !== -1) {
                updatedGroups[groupIndex].invitations.splice(
                    invitationIndex,
                    1
                );
                setGroups(updatedGroups);
            }
        }
    };
    const handleDeleteUser = (user: string, groupName: string) => {
        // Trouver le groupe correspondant dans la liste des groupes
        const groupIndex = groups.findIndex(
            (group) => group.name === groupName
        );
        if (groupIndex !== -1) {
            // Supprimer l'utilisateur du groupe
            const updatedGroups = [...groups];
            const userIndex = updatedGroups[groupIndex].users.indexOf(user);
            if (userIndex !== -1) {
                updatedGroups[groupIndex].users.splice(userIndex, 1);
                setGroups(updatedGroups);
            }
        }
    };
    const renderGroupList = () => {
        if (selectedGroup !== "") {
            // Filtrer les groupes en fonction de la sélection
            const selectedGroupObj = groups.find(
                (group) => group.name === selectedGroup
            );
            if (selectedGroupObj) {
                return (
                    <div>
                        <h5>Utilisateurs du groupe {selectedGroupObj.name}</h5>
                        <ul>
                            {selectedGroupObj.users.map((user, index) => (
                                <li key={index}>
                                    {user}
                                    <button
                                        onClick={() =>
                                            handleDeleteUser(
                                                user,
                                                selectedGroupObj.name
                                            )
                                        }
                                    >
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <h5>Invitations en attente</h5>
                        <ul>
                            {selectedGroupObj.invitations.map(
                                (invitation, invitationIndex) => (
                                    <li key={invitationIndex}>
                                        {invitation}
                                        <button
                                            onClick={() =>
                                                handleAcceptInvitation(
                                                    selectedGroupObj.name,
                                                    invitation
                                                )
                                            }
                                        >
                                            Accepter
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                );
            }
        }

        return null;
    };

    return (
        <div>
            <h4>Groupes et Invitations</h4>

            <h5>Créer un groupe</h5>
            <input
                type="text"
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
            />
            <button onClick={handleCreateGroup}>Créer</button>

            <h5>Envoyer une invitation</h5>
            <input
                type="text"
                value={invitationMessage}
                onChange={(e) => setInvitationMessage(e.target.value)}
            />

            <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
            >
                <option value="">Sélectionner un groupe</option>
                {groups.map((group, index) => (
                    <option key={index} value={group.name}>
                        {group.name}
                    </option>
                ))}
            </select>

            <button onClick={handleSendInvitation}>Envoyer</button>

            {renderGroupList()}
        </div>
    );
};

export default AddGroups;
