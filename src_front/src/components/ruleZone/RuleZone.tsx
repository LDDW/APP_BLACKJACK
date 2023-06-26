import React, { useState } from 'react';
import './RuleZone.css';

const RuleZone: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="rule-zone">
      <button onClick={openModal}>Aide</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content rules-open">
            <button onClick={closeModal} className="modal-close">Fermer</button>
            <h1>Règles du Blackjack</h1>
            <p>En conditions normales, la maison a un avantage très mince...</p>
            <h2>Valeurs des Cartes</h2>
            <p>Vous devez connaître les valeurs des cartes...</p>
            <h2>Déroulement du Jeu</h2>
            <p>La règle du blackjack la plus importante est simple...</p>
            <h2>Règles de la Table</h2>
            <p>Lorsque vous jouez contre la maison...</p>
            <h2>Règles du Croupier</h2>
            <p>Le croupier joue essentiellement selon le même ensemble...</p>
            <h2>Paiements Bonus</h2>
            <p>Lorsqu'un joueur reçoit une main gagnante au blackjack...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RuleZone;

