import React from 'react';

import DealerZone from '../dealerZone/DealerZone';
import ShoeZone from "../shoeZone/ShoeZone";
import DiscardPileZone from '../discardPileZone/DiscardPileZone';
import ChipZone from "../chipZone/ChipZone";
import RuleZone from "../ruleZone/RuleZone";
import PlayerZone from "../playerZone/PlayerZone";
import BetZone from '../betZone/BetZone';

// Récupération du nom du joueur passé en props de PlayerZone
const playerNames = ["Jules", "Pierre", "Paul", "Jacques", "Sophie", "Marie", "Louise"];
// Récupération du status du joueur passé en props de PlayerZone
const playerStatuses = ["not-played", "not-played", "playing", "not-played", "played", "not-played", "not-played"]; // Exemple de statuts


const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <DealerZone />
                    <DiscardPileZone />
                    {/* <ShoeZone /> */}
                    
                    <ChipZone />
                    <PlayerZone playerNames={playerNames} playerStatuses={playerStatuses}/> 
                    <BetZone minValue={2} />
                    <RuleZone />
                </header>
            </div>
        )
}

export default Game;
