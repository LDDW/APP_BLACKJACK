import React from 'react';
import './PlayerZone.css';

interface PlayerProps {
  playerName: string;
}

const PlayerZone: React.FC<PlayerProps> = ({ playerName }) => {
  
  return (
    <div className="player-zone">
      <h2>Player {playerName}'s Zone</h2>
      <div className="card-area">
        {/* Place for displaying player's cards */}
      </div>
      <div className="bet-area">
        {/* Place for displaying player's bets */}
      </div>
    </div>
  );
};

export default PlayerZone;
