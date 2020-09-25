import React, {Component} from 'react';
import './App.scss';
import Menu from './components/Menu';
import DocumentList from './components/DocumentList';
import Heroes from './heroes.json';
import Landing from './components/Landing';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.muteDocumentList = this.muteDocumentList.bind(this);
  }
  
  state = {
    heroes: Heroes,
    documentListMuted: false,
    queriedHeroes: Heroes,
  }

  // Function to make the list mutable
  muteDocumentList = () => { 
    this.setState({
      documentListMuted: !this.state.documentListMuted
    }) 
  }

  // Function to make the list searchable
  searchHeroes(query) {
    let documentList = [];
    let newDocumentList = [];

    if (query.target.value !== "") {
      documentList = [...this.state.filtered];
      newDocumentList = documentList.filter(item => {
        const name = item.name.toLowerCase();
        const filter = query.target.value.toLowerCase();
        return (name.includes(filter));
      });
    } else {
      newDocumentList = [...this.state.heroes];
    }

    this.setState({
      queriedHeroes: newDocumentList
    });
  }

  render(){
    return (
      <div className="app">
        {/* lifting the state up within the menu child components for muting de list*/}
        <Menu 
          documentListMuted={this.state.documentListMuted}
          muteDocumentList={this.muteDocumentList}
          searchHeroes={this.searchHeroes}
        />
        <Landing documentListMuted={this.state.documentListMuted}/>
        <DocumentList 
          heroes={this.state.queriedHeroes} 
          documentListMuted={this.state.documentListMuted}
        />
      </div>
    );
  }
}

export default App;
