import React, { useState} from 'react';
import './BetZone.css';

interface ChipProps {
    minValue: number;
}

const BetZone: React.FC<ChipProps> = ({ minValue }) => {
    const [betValue, setBetValue] = useState(minValue);

    const handleIncrement = () => {
        setBetValue(prevValue => betValue + 1);
    };

    const handleDecrement = () => { 
        if(betValue > minValue) {
            setBetValue(prevValue => betValue - 1);
        }
    };

    return (
        <div className="BetZone">
            <span className='BetText'>Miser</span>
            <input type="number" className='BetInput' min={minValue} value={betValue} readOnly />
            <div className="betButtons">
                <button className="IncrementButton" onClick={handleIncrement}>+</button>
                <button className="DecrementButton" onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
};

export default BetZone;