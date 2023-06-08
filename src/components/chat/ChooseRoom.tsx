import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChooseRoom = ({ socket }: any) => {
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState<any>([]);
  const navigate = useNavigate();

  const handleCreateRoom = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (room.trim() && localStorage.getItem("userName")) {
      socket.emit("joinRoom", room);
      localStorage.setItem("currentRoom", room);
      socket.emit("newUser", {
        userName: localStorage.getItem("userName"),
        socketID: socket.id,
        room: room,
      });

      navigate("/chat/talk");
    }
    setRoom("");
  };

  useEffect(() => {
    socket.on("roomListResponse", (data: any) => setRooms([...data]));
  }, [socket, rooms]);

  const handleJoinRoom = (room: any) => {
    socket.emit("joinRoom", room);
    localStorage.setItem("currentRoom", room);
    socket.emit("newUser", {
      userName: localStorage.getItem("userName"),
      socketID: socket.id,
      room: room,
    });
    navigate("/chat/talk");
  };

  return (
    <div>
      <h1>Create room</h1>
      <form className="form" onSubmit={handleCreateRoom}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
      {rooms.map((room: any) => {
        return (
          <div
            key={room}
            style={{ padding: "5px", display: "flex", alignItems: "center" }}
          >
            <div style={{ paddingRight: "10px" }}>{room}</div>
            <button type="button" onClick={() => handleJoinRoom(room)}>
              Join
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseRoom;
