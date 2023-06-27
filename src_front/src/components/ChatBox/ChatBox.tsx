import React, { useState } from 'react';
import './ChatBox.css';

interface ChipProps {
    minValue: number;
}

const ChatBox = () => {

    return (

        <div className="ChatBox">
            <div className="InputContainer">
                <input
                    type="text"
                    id="chat-input"
                    className="ChatInput"
                    placeholder="Ecrire le message ici">
                </input>
                <button className="SendButton">Envoyer</button>
            </div>
        </div>

    );
};
export default ChatBox;