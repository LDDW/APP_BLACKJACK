import React from 'react';
import './PlayerZone.css';

interface PlayerZoneProps {
  playerNames: string[];
  playerStatuses: string[];
}

const PlayerZone: React.FC<PlayerZoneProps> = ({ playerNames, playerStatuses }) => {

  return (
    <div className="playerZone">
      {playerNames.map((playerName, index) => (
        <div key={index} className="rectangleContainer">
          <div className="playerName">{playerName}</div> 
          <div className={`rectangle rectangle-${playerStatuses[index]}`}></div>
        </div>
      ))}
    </div>
  );
}

export default PlayerZone;
