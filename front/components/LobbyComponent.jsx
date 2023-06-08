import React from 'react';

const LobbyComponent = ({ rooms, joinRoom }) => {
  return (
    <div>
      <h2>Lobby</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <span>{room.name}</span>
            <button onClick={() => joinRoom(room.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LobbyComponent;
