import React from 'react';

import DealerZone from '../dealerZone/DealerZone';
import ShoeZone from "../shoeZone/ShoeZone";
import DiscardPileZone from '../discardPileZone/DiscardPileZone';
import ChipZone from "../chipZone/ChipZone";
import RuleZone from "../ruleZone/RuleZone";
import PlayerZone from "../playerZone/PlayerZone";
import BetZone from '../betZone/BetZone';

// Récupération du nom du joueur passé en props de PlayerZone
const playerName = "Jules";

const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <DealerZone />
                    <DiscardPileZone />
                    {/* <ShoeZone /> */}
                    
                    <ChipZone />
                    { <PlayerZone playerName={playerName}/> }
                    <BetZone minValue={2} />
                    <RuleZone />
                </header>
            </div>
        )
}

export default Game;
