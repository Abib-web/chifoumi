import React from 'react';
import { Howl } from 'howler';
import './Menu.css';
import hoverSound from './623990__eqylizer__button-hover-click.mp3';

const SubMenu = ({ options, navigateBack, navigateToOption }) => {
  const playHoverSound = () => {
    const sound = new Howl({
      src: [hoverSound],
      autoplay: true,
    });
  };

  return (
    <div>
      <div className="back-arrow" onMouseEnter={playHoverSound} onClick={navigateBack}>
        &lt;-
      </div>
      <ul className="list-menu">
        {options.map((option, index) => (
          <li key={index}>
            <div className="menu-option" onMouseEnter={playHoverSound} onClick={() => navigateToOption(option.route)}>
              {option.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubMenu;
