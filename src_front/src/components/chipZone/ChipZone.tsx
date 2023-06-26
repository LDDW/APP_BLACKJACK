import React from 'react';
import './ChipZone.css';
// import BetZone from '../betZone/BetZone';
import Chip from '../chip/Chip';


const ChipZone = () => {
  return (
    <div className="chip-zone">
      <div className="chip-container">
      <div>
            <Chip value={50} color="red" />
            <Chip value={100} color="green" />
            <Chip value={500} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default ChipZone;

