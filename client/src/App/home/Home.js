import React, { Component } from 'react';

import './Home.scss';

import Sebs from './../components/sebs/Sebs';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">        
        <Sebs />
      </div>
    );
  }
}
export default Home;