import React, {Component} from 'react';
import './App.scss';
import Menu from './components/Menu';
import DocumentList from './components/DocumentList';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.muteDocumentList = this.muteDocumentList.bind(this);

    this.state = {
      documentListMuted: false,
      documentListSearchQuery: "",
      documentListSorted: ""
    }
  }

  // Method to update the state for searching the document list
  updateSearch = (searchQuery) => {
    this.setState({
      documentListSearchQuery: searchQuery
    })
  }

  // Method to update the state for sorting the document list
  updateSort = (sortType) => {
    this.setState({
      documentListSorted: sortType
    })
  }

  // Method to make the document list mutable
  muteDocumentList = () => { 
    this.setState({
      documentListMuted: !this.state.documentListMuted
    }) 
  }

  render(){
    return (
      <div className="app">
        {/* Lifting the state up within the menu child components for the menu action */}
        <Menu 
          updateSearch={this.updateSearch}
          updateSort={this.updateSort}
          muteDocumentList={this.muteDocumentList}
          documentListMuted={this.state.documentListMuted}
        />
        <Home documentListMuted={this.state.documentListMuted}/>
        {/* Passing the menu actions as props to the list*/}
        <DocumentList 
          documentListSearchQuery={this.state.documentListSearchQuery}
          documentListMuted={this.state.documentListMuted}
          documentListSorted={this.state.documentListSorted}
        />
      </div>
    );
  }
}

export default App;
