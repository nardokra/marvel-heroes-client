import React, {Component} from 'react';
// import axios from 'axios';
import './App.scss';
import Menu from './components/Menu';
// import Route from 'react-router-dom';

class App extends Component {
  state = {
  }

  render(){
    return (
      <div className="app">
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
