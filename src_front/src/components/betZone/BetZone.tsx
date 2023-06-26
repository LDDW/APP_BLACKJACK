import React, { useState } from 'react';
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
        if (betValue > minValue) {
            setBetValue(prevValue => betValue - 1);
        }
    };

    return (

        <div className="BetZone">
            <div className='ButtonZone'>
                <button className='StopButton'>STOP</button>
            </div>
            <button className='BetButton'>Miser</button>
            <div className="euro-input-container">
                <input
                    type="number"
                    id="euro-input"
                    value={betValue}
                    className="BetInput"
                    readOnly
                />
                <span className="euro-symbol">€</span>
            </div>
            <div className="betButtons">
                <button className="IncrementButton" onClick={handleIncrement}>+</button>
                <button className="DecrementButton" onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
};

export default BetZone;