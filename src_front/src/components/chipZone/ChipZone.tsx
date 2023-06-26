import React from 'react';
import './ChipZone.css';
import Chip from '../chip/Chip';

interface Player {
    id: number;
    pseudo: string;
}

interface ChipZoneProps {
    players: Player[];
}

const ChipZone: React.FC<ChipZoneProps> = ({ players }) => {
    return (
        <div className="chip-zone">
            {players.map((player, index) => (
                <div className="chip-container" key={player.id}>
                    <h3>{player.pseudo}</h3>
                    <div>
                        <Chip value={50} color="red" />
                        <Chip value={100} color="green" />
                        <Chip value={500} color="blue" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChipZone;
