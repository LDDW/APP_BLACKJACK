import React, {useCallback, useEffect, useState} from 'react';
import './BetZone.css';

interface BetZoneProps {
    minValue: number;
    betValue: number;
    chip: {chipred: number, chipblue: number, chipgreen: number}
    setChip: React.Dispatch<React.SetStateAction<{chipred: number, chipblue: number, chipgreen: number}>>;
    setBetValue: (value: (prevValue: number) => number) => void;
}

const BetZone: React.FC<BetZoneProps> = ({ minValue, betValue, setBetValue, setChip, chip }) => {;

    const handleIncrement = () => {
        setBetValue((prevValue) => prevValue + 1);
    };

    const handleDecrement = () => {
        if (betValue > minValue) {
            setBetValue((prevValue) => prevValue - 1);
        }
    };

    const handlePlaceBet = useCallback(() => {
        console.log(betValue)
        if (betValue >= 2 && betValue < 11) {
            setChip({
                ...chip,
                chipgreen: betValue,
                chipblue: 0,
                chipred: 0
            })
        } else if (betValue >= 11 && betValue < 21) {
            setChip({
                ...chip,
                chipblue: betValue,
                chipred: 0,
                chipgreen: 0
            })
        } else if (betValue >= 20) {
            setChip({
                ...chip,
                chipred: betValue, chipblue: 0, chipgreen: 0
            })
        }
    }, [betValue, setChip])

    return (

        <div className="BetArea">
            <div className='ButtonArea'>
                <button className='StopButton'>STOP</button>
            </div>
            <button className="BetButton" onClick={handlePlaceBet}>
                Miser
            </button>
            <div className="euro-input-container">
                <input
                    type="text"
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
