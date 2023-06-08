import React from 'react';


import DealerZone from '../dealerZone/DealerZone';
import ShoeZone from "../shoeZone/ShoeZone";
import DiscardPileZone from "../discardPileZone/DiscardPileZOne";
import ChipZone from "../chipZone/ChipZone";
import RuleZone from "../ruleZone/RuleZone";

const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <DealerZone />
                    {/* <PlayerZone /> */}
                    <ShoeZone />
                    <DiscardPileZone />
                    <ChipZone />
                    <RuleZone />
                </header>
            </div>
        )
}

export default Game;
