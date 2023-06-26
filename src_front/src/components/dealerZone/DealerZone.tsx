import React from 'react';
import './DealerZone.css';

import dealerIcon from '../../assets/dealerIcon.png';
import cardFront from '../../assets/cardFront.png';
import cardBack from '../../assets/cardBack.png';
import deckImage from '../../assets/deckImage.png';

const DealerZone = () => {
  return (
    <div className="dealerZone">
      <div className="dealerCards">
        <div className="dealerIcon">
          <img className="dealer-img" src={dealerIcon} alt="Dealer" />
        </div>
        <div className="cards">
          <img className="card front" src={cardFront} alt="Card front" />
          <img className="card back" src={cardBack} alt="Card back" />
        </div>
      </div>
      <div className="deck">
        <img className="deck-img" src={deckImage} alt="Deck" />
      </div>
    </div>
  );
};

export default DealerZone;
