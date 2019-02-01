import React, { Component } from 'react';
import './page1.scss';

class page1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAttributes:'physical'
    }
    /* this.changeAttribute=this.changeAttribute.bind(this); */
  }
  changeAttribute(attribute){
      this.setState({showAttributes:attribute}) 
  }
  render (){
    return (
      <div className="body">
      
      <div className="container-concepts">
        <div className="page-concepts">
          <div class="name">
            <h3>Name</h3>
            <input type="text" class="name-input" />
          </div>
          <div class="concept-container">
          <div class="concepts">
            <h3>Concept</h3>
            <input type="text" class="cronica-input" />
          </div>
          <div class="concepts">
            <h3>Predator</h3>
            <input type="text" class="sire-input" />
          </div>
          <div class="concepts">
            <h3>Chroonicle</h3>
            <input type="text" class="concept-input" />
          </div>
          <div class="concepts">
            <h3>Aspiration</h3>
            <input type="text" class="ambicion-input" />
          </div>
          <div class="concepts">
            <h3>Clan</h3>
            <input type="text" class="deseo-input" />
          </div>
          <div class="concepts">
            <h3>Sire</h3>
            <input type="text" class="depredador-input" />
          </div>
          <div class="concepts">
            <h3>Desire</h3>
            <input type="text" class="clan-input" />
          </div>
          <div class="concepts">
            <h3>Generation</h3>
            <input type="text" class="generation-input" />
          </div>
          </div>
        </div>
      
      </div>
      <div className="container-attributes">
        <h2>Atributos</h2>
        <div className="attributes-button">
        <button onClick={()=>this.changeAttribute('physical')}>Físicos</button>
        <button onClick = {()=>this.changeAttribute('social')} >Sociales</button>
        <button onClick={()=>this.changeAttribute('mentals')}>Mentales</button>
        </div>
        <div className="general-attributes">
          {
            this.state.showAttributes=='physical'? (
          
            <div className="physical-attributes" >
              <section>
                <h3>Fuerza</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Destreza</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Resistencia</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
            </div>
            )
            :(
              <div></div>
            )
          }
          {
            this.state.showAttributes=='social' ? (
              <div className="social-attributes">
              <section>
                <h3>Carisma</h3>              
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Manipulación</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Compostura</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
            </div>
            )
            :(
              <div></div>
            )
          }
          {
            this.state.showAttributes=='mentals' ? (
            <div className="mentals-attributes">
              <section>
                <h3>Inteligencia</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Astucia</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
              <section>
                <h3>Resolución</h3>
                <div>
                  <input type="radio" /><input type="radio" />
                  <input type="radio" /><input type="radio" />
                  <input type="radio" />
                </div>
              </section>
            </div>
            
          )
            :(
              <div></div>
            )
          }
        </div>
      </div>
      
      
      </div>

    );
  }
}

export default page1;