import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu.js';

function GamePage(){
    return(
        <div>
            <div className='game-container' style={styles.gameContainer}>
            <Menu/>
            </div>
            <Outlet/>
        </div>
    );
}

export default GamePage;

const styles = {
    gameContainer: {
      width: '700px', // Ajoutez la largeur que vous souhaitez pour le carré
      height: '400px', // Ajoutez la même hauteur que la largeur pour faire un carré
      background: 'hsl(0,0%,10%)', // Ajoutez une couleur de fond pour visualiser le conteneur
      margin: 'auto', // Centre horizontalement
      position: 'absolute', // Assurez-vous que le positionnement est correct
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  };
  
