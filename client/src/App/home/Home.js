import React, { Component } from 'react';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      
      <div className="Hero">
        <div className="wrapper">
          Vampiro V5 
          <p className="p1">Si un
            personaje falla en una acción, a
            veces puede volver a intentarla.
            Después de todo, fallar al forzar
            una cerradura no significa que el
            personaje no pueda insertar una
            ganzúa en esa puerta nunca más.
            Las circunstancias deben justificar
            un intento posterior (por ejemplo,
            el personaje obtiene un juego de
            ganzúas mejor o su habilidad se ha
            incrementado desde la última vez).</p>
        </div>      
        <div className="Facebook">
        Facebook
        </div>
        <div className="twitter">
        Twitter

        </div>
      </div>
      
    );
  }
}
export default Home;