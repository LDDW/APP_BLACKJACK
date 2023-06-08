import React from 'react';


import CroupierZone from "../croupierZone/CroupierZone";
import ShoeZone from "../shoeZone/ShoeZone";
import DiscardPileZone from "../discardPileZone/DiscardPileZOne";
import ChipZone from "../chipZone/ChipZone";
import RuleZone from "../ruleZone/RuleZone";

const Game = () => {
    return(
            <div className="App" >
                <header className="App-header">
                    <CroupierZone />
                    {/* <PlayerZone /> */}
                    <ShoeZone />
                    <DiscardPileZone />
                    <ChipZone />
                    <RuleZone />
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
}

export default Game;
