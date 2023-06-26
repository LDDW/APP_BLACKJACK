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
            <p>Le blackjack est un jeu de cartes où l'objectif est d'obtenir une main dont la valeur totale est plus proche de 21 que celle du croupier, sans dépasser 21.

Les cartes numérotées de 2 à 10 ont une valeur égale à leur chiffre, les figures (valet, dame, roi) valent 10 points et l'as peut valoir 1 ou 11 points.

Le croupier distribue deux cartes visibles aux joueurs et une carte visible à lui-même. Les joueurs peuvent demander des cartes supplémentaires ("hit"), rester avec leur main actuelle ("stand"), doubler leur mise et recevoir une carte supplémentaire ("double down"), ou séparer deux cartes de même valeur en deux mains distinctes ("split").

Une fois que les joueurs ont pris leurs décisions, le croupier révèle sa deuxième carte et doit tirer des cartes supplémentaires selon des règles prédéfinies. Le croupier doit atteindre un total de 17 ou plus, mais doit s'arrêter une fois atteint.

Un joueur gagne s'il a une main dont la valeur est plus élevée que celle du croupier sans dépasser 21. Si la main initiale d'un joueur est un blackjack (un as et une carte de valeur 10), il gagne automatiquement, sauf si le croupier a également un blackjack.

Si la main dépasse 21, le joueur perd. En cas d'égalité, la mise est rendue. Les résultats peuvent varier en fonction des règles spécifiques de la variante de blackjack jouée.</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default RuleZone;

<p>Le blackjack est un jeu de cartes où l'objectif est d'obtenir une main dont la valeur totale est plus proche de 21 que celle du croupier, sans dépasser 21.

Les cartes numérotées de 2 à 10 ont une valeur égale à leur chiffre, les figures (valet, dame, roi) valent 10 points et l'as peut valoir 1 ou 11 points.

Le croupier distribue deux cartes visibles aux joueurs et une carte visible à lui-même. Les joueurs peuvent demander des cartes supplémentaires ("hit"), rester avec leur main actuelle ("stand"), doubler leur mise et recevoir une carte supplémentaire ("double down"), ou séparer deux cartes de même valeur en deux mains distinctes ("split").

Une fois que les joueurs ont pris leurs décisions, le croupier révèle sa deuxième carte et doit tirer des cartes supplémentaires selon des règles prédéfinies. Le croupier doit atteindre un total de 17 ou plus, mais doit s'arrêter une fois atteint.

Un joueur gagne s'il a une main dont la valeur est plus élevée que celle du croupier sans dépasser 21. Si la main initiale d'un joueur est un blackjack (un as et une carte de valeur 10), il gagne automatiquement, sauf si le croupier a également un blackjack.

Si la main dépasse 21, le joueur perd. En cas d'égalité, la mise est rendue. Les résultats peuvent varier en fonction des règles spécifiques de la variante de blackjack jouée.</p>
            