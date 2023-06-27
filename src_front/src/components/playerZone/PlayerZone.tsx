import React from 'react';
import './PlayerZone.css';
import ChipZone from "../chipZone/ChipZone";

interface PlayerZoneProps {
  playerNames: string[];
  playerStatuses: string[];
  cardValues: number[];
}

const PlayerZone: React.FC<PlayerZoneProps> = ({ playerNames, playerStatuses, cardValues }) => {
  const calculateOffset = (index: number) => {
    const maxOffset = 60;
    const middleIndex = Math.floor(playerNames.length / 2);

    return maxOffset * Math.pow((index - middleIndex) / middleIndex, 2);
  };

  const calculateRotation = (index: number) => {
    const maxRotation = 15;
    const middleIndex = Math.floor(playerNames.length / 2);

    return -maxRotation * (index - middleIndex) / middleIndex;
  };

  // Add empty entries to playerNames, playerStatuses, and cardValues arrays if needed
  while (playerNames.length < 7) {
    playerNames.push('');
  }
  while (playerStatuses.length < 7) {
    playerStatuses.push('');
  }
  while (cardValues.length < 7) {
    cardValues.push(0);
  }

  return (
    <div className="playerZone">
      {playerNames.map((playerName, index) => (
        <div
          key={index}
          className="rectangleContainer"
          style={{
            position: 'relative',
            bottom: `${calculateOffset(index)}px`,
            transform: `rotate(${calculateRotation(index)}deg)`,
          }}
        >
          <ChipZone/>
          <div className="playerName">{playerName}</div>
          <div className={`cardValue ${playerStatuses[index] !== 'played' ? 'empty' : ''}`}>{playerStatuses[index] === 'played' ? cardValues[index] : ''}</div>
          <div className={`rectangle rectangle-${playerStatuses[index]}`}></div>
        </div>
      ))}
    </div>
  );
}

export default PlayerZone;
