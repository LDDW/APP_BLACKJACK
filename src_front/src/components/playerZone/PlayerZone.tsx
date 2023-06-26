import React from 'react';
import './PlayerZone.css';

interface PlayerZoneProps {
  playerNames: string[];
  playerStatuses: string[];
  cardValues: number[];
}

const PlayerZone: React.FC<PlayerZoneProps> = ({ playerNames, playerStatuses, cardValues }) => {

  return (
    <div className="playerZone">
      {playerNames.map((playerName, index) => (
        <div key={index} className="rectangleContainer">
          <div className="playerName">{playerName}</div>
          <div className={`cardValue ${playerStatuses[index] !== 'played' ? 'empty' : ''}`}>{playerStatuses[index] === 'played' ? cardValues[index] : ''}</div>
          <div className={`rectangle rectangle-${playerStatuses[index]}`}></div>
        </div>
      ))}
    </div>
  );
}

export default PlayerZone;
