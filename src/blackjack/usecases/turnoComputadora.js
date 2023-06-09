import {pedirCarta  } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la PC necesita para ganar
 * @param {HTMLElement} puntosHTML Html para mostrar los puntos
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos ,puntosHTML, deck=[]) => {


  if(!puntosMinimos) throw new Error('Puntos minimos son necesrios');
  if(!puntosHTML) throw new Error('Argumento puntos Html es necesario ');

  let puntosComputadora = 0;
  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML[1].innerText = puntosComputadora;
      
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
      divCartasComputadora.append( imgCarta );

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}