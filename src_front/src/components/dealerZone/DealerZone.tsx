import React from 'react';
import './DealerZone.css';

// Icône de croupier hypothétique, vous pouvez le remplacer par votre propre icône
import dealerIcon from '../../assets/dealerIcon.png';

// Carte recto et verso hypothétiques, vous pouvez les remplacer par vos propres images
import cardFront from '../../assets/cardFront.png';
import cardBack from '../../assets/cardBack.png';

// Image de deck hypothétique, vous pouvez la remplacer par votre propre image
import deckImage from '../../assets/deckImage.png';

const DealerZone = () => {
  return (
      <div className="dealerZone">
          <div className="dealerCards">
              <div className="dealerIcon">
                  <img src={dealerIcon} alt="Dealer" />
              </div>
              <div className="cards">
                  <img className="card front" src={cardFront} alt="Card front" />
                  <img className="card back" src={cardBack} alt="Card back" />
              </div>
          </div>
          <div className="deck">
              <img src={deckImage} alt="Deck" />
          </div>
      </div>
  );
};

export default DealerZone;
