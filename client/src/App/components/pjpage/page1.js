import React, { Component } from 'react';
import './page1.scss';
class page1 extends Component {
    render (){
        return (
            <div className="container-general">
                <div className="page-general">
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


        );
    }
}

export default page1;