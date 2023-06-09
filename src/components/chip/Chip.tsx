import React from 'react';
import './Chip.css';

interface ChipProps {
    value: number;
    color: string;
}

const Chip: React.FC<ChipProps> = ({ value, color }) => {
    return (
        <div className={`chip ${color}`}>
            {value}
        </div>
    );
};

export default Chip;
