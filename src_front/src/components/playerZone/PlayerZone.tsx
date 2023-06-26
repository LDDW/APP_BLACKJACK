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
    // Increased the maximum offset to 100px for the first/last element
    const maxOffset = 60;
    const middleIndex = playerNames.length / 2;

    // Use a parabolic function to get a more pronounced curve
    return maxOffset * Math.pow((index - middleIndex) / middleIndex, 2);
  };

  const calculateRotation = (index: number) => {
    // Assume a maximum rotation of 15 degrees for the first/last element
    const maxRotation = 15;
    const middleIndex = playerNames.length / 2;

    // Changed the sign to invert the tilt
    return -maxRotation * (index - middleIndex) / middleIndex;
  };

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
