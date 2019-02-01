import React, { Component } from 'react';

class page1 extends Component {
    render (){
        return (
            <div className="body">
                <div className="page-general">
                    <div class="concept-container">
                    <div class="name">
                        <h3>Nombre</h3>
                        <input type="text" class="name-input" />
                    </div>
                    <div class="cronica">
                        <h3>Concepto</h3>
                        <input type="text" class="cronica-input" />
                    </div>
                    <div class="sire">
                        <h3>Depredador</h3>
                        <input type="text" class="sire-input" />
                    </div>
                    <div class="concept">
                        <h3>Crónica</h3>
                        <input type="text" class="concept-input" />
                    </div>
                    <div class="ambicion">
                        <h3>Ambición</h3>
                        <input type="text" class="ambicion-input" />
                    </div>
                    <div class="deseo">
                        <h3>Clan</h3>
                        <input type="text" class="deseo-input" />
                    </div>
                    <div class="depredador">
                        <h3>Sire</h3>
                        <input type="text" class="depredador-input" />
                    </div>
                    <div class="clan">
                        <h3>Deseo</h3>
                        <input type="text" class="clan-input" />
                    </div>
                    <div class="generation">
                        <h3>Generación</h3>
                        <input type="text" class="generation-input" />
                    </div>
                    </div>
                </div>
            
            </div>


        );
    }
}

export default page1;