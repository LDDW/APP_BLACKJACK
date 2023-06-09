import React, { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

const ChatBar = ({ socket }: { socket: Socket }) => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    socket.on("newUserResponse", (users: string[]) => setUsers([...users]));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users &&
            users.length > 0 &&
            users.map((user) => <p key={`user-${user}`}>{user}</p>)}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
