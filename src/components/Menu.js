import React, { useState } from 'react';
import { Howl } from 'howler';
import './Menu.css';
import hoverSound from './623990__eqylizer__button-hover-click.mp3';
import SubMenu from './SubMenu';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const playHoverSound = () => {
    const sound = new Howl({
      src: [hoverSound],
      autoplay: true,
    });
  };

  const mainMenuOptions = [
    {
      label: "Jouer avec l'ordinateur",
      subMenuOptions: [
        { label: "Facile", route: "/facile" },
        { label: "Moyen", route: "/moyen" },
        { label: "Difficile", route: "/difficile" }
      ]
    },
    {
      label: "Jouer a plusieurs",
      subMenuOptions: [
        { label: "En ligne", route: "/en-ligne" },
        { label: "En local", route: "/en-local" }
      ]
    },
    {
      label: "Voir les meilleurs score",
      subMenuOptions: [
        { label: "Semaine", route: "/semaine" },
        { label: "Mois", route: "/mois" },
        { label: "Tous les temps", route: "/tous-les-temps" }
      ]
    },
    {
      label: "Comprendre le jeu",
      subMenuOptions: []
    }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const navigateBack = () => {
    setSelectedOption(null);
  };

  const navigateToOption = (route) => {
    // Ici, vous pouvez ajouter votre logique de navigation
    // en utilisant React Router ou toute autre méthode que vous utilisez dans votre application.
  };

  return (
    <div className="menu-container">
      {selectedOption ? (
        <SubMenu options={selectedOption.subMenuOptions} navigateBack={navigateBack} navigateToOption={navigateToOption} />
      ) : (
        <ul className="list-menu">
          {mainMenuOptions.map((option, index) => (
            <li key={index}>
              <div className="menu-option" onMouseEnter={playHoverSound} onClick={() => handleOptionClick(option)}>
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
