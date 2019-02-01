import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './home/Home';
import page1 from './components/pjpage/page1';

class App extends Component {
  render() {
    return (
      
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/page' component={page1}/>
        </Switch>
      </div>
      
    );
  }
}

export default App;
