import React from "react";
import { useNavigate } from "react-router-dom";
import { messagesInterface } from "./ChatPage";
import { Socket } from "socket.io-client";

const ChatBody = ({
  messages,
  // typingStatus,
  lastMessageRef,
  socket,
}: {
  messages: messagesInterface[];
  // typingStatus: any;
  lastMessageRef: React.RefObject<HTMLDivElement>;
  socket: Socket;
}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    socket.emit("leaveRoom", localStorage.getItem("currentRoom"));
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message, index) =>
          message.name === localStorage.getItem("userName") ? (
            <div
              className="message__chats"
              key={`messages-1${message.room}-${message.name}-${index}`}
            >
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div
              className="message__chats"
              key={`messages-2${message.room}-${message.name}-${index}`}
            >
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">{/* <p>{typingStatus}</p> */}</div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
