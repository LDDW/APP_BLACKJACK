import React from 'react';

const RoomComponent = ({ room, startGame }) => {
  return (
    <div>
      <h2>Room: {room.name}</h2>
      <p>Players: {room.players.join(', ')}</p>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default RoomComponent;
