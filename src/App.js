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
    this.searchHeroes = this.searchHeroes.bind(this);
    this.sortDocumentListAscending = this.sortDocumentListAscending.bind(this);
    this.sortDocumentListDescending = this.sortDocumentListDescending.bind(this);

    this.state = {
      heroes: Heroes.data,
      documentListMuted: false,
      queriedHeroes: Heroes.data
    }
  }

  // Method to make the list mutable
  muteDocumentList = () => { 
    this.setState({
      documentListMuted: !this.state.documentListMuted
    }) 
  }

  // Method to make the list searchable
  searchHeroes = (query) => {
    let documentList = [];
    let filteredList = [];
    let newDocumentList = [];

    if (query !== "") {
      documentList = [...this.state.heroes];
      filteredList = documentList.filter(heroe => {
        const name = heroe.name.toLowerCase();
        const superPower = heroe.superPowers.toLowerCase();
        const filter = query.toLowerCase();
        return (name.includes(filter) || superPower.includes(filter));
      });
      if(filteredList.length <= 0){
        newDocumentList = [];
      } else{
        newDocumentList = filteredList;
      }
    } else {
      newDocumentList = this.state.heroes;
    }

    this.setState({
      queriedHeroes: newDocumentList
    });
  }

    // Method to make the document list ascending
    sortDocumentListAscending = () => {
      let sortedList = this.state.queriedHeroes.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
            return -1;
        }
        return 0;
      })

      this.setState({
        queriedHeroes: sortedList
      })
    }
  
    // Method to make the document list descending
    sortDocumentListDescending = () => {
      let sortedList = this.state.queriedHeroes.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
      })

      this.setState({
        queriedHeroes: sortedList
      })
    }

  render(){
    if(this.state.queriedHeroes.length === 0){
      return(
        <div className="app">
          <Menu 
            documentListMuted={this.state.documentListMuted}
            muteDocumentList={this.muteDocumentList}
            searchHeroes={this.searchHeroes}
            sortDocumentListAscending={this.sortDocumentListAscending}
            sortDocumentListDescending={this.sortDocumentListDescending}
          />
          <Landing/>
        </div>
      )
    } else{
      return (
        <div className="app">
          {/* lifting the state up within the menu child components for muting de list*/}
          <Menu 
            documentListMuted={this.state.documentListMuted}
            muteDocumentList={this.muteDocumentList}
            searchHeroes={this.searchHeroes}
            sortDocumentListAscending={this.sortDocumentListAscending}
            sortDocumentListDescending={this.sortDocumentListDescending}
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
}

export default App;
