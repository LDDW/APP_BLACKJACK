import React, { useState } from 'react';
import './ChatBox.css';

interface ChatBoxMessages {
    messages: string[];
}

const ChatBox: React.FC<ChatBoxMessages> = ({ messages }) => {
    return (

        <div className="ChatBox">
            <div className="MessagesContainer">
                {messages.map((message, index) => (
                    <p key={index} className="message">{message}</p>
                ))}
            </div>
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