/* I decided to make use of react-router-dom for muting the document list,
it gives the user a feeling that they interact with a website. Because most users are not
aware of the fact that a single page application doesn't need URLs anymore. */

import React, {Component} from 'react';
// import axios from 'axios';
import './App.scss';
import Menu from './components/Menu';
import DocumentList from './components/DocumentList';
import Landing from './components/Landing';
import Heroes from './heroes.json';
import {Route} from 'react-router-dom'; 

class App extends Component {
  state = {
    heroes: Heroes
  }

  render(){
    return (
      <div className="app">
        <Menu/>
        <Route exact path={'/'} component={() =><Landing/>} />
        <Route path={'/heroes'} component={() => <DocumentList heroes={this.state.heroes}/>} />
      </div>
    );
  }
}

export default App;
