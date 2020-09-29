/* 
  I decided to make the list a component, in this way I can keep the code clean
  and separate the concerns. Decided to load the data in here, because this is where all the actions
  on the list would happen. I have put the API requests in a seperated folder "utils". To keep it
  clean.
*/

import React, { Component } from 'react';
import './DocumentList.scss';
import { getAllHeroeDocuments, postRemoveEditHeroeDocument, postAddHeroeDocument, postEditHeroeDocument } from './../utils/documentListRequests';
import ChangeDocumentList from './ChangeDocumentList';

export default class Documentlist extends Component {
  constructor(props) {
    super(props);
    this.changeDocumentListFormVisible = this.changeDocumentListFormVisible.bind(this);
    this.addDocumentToList = this.addDocumentToList.bind(this);
    this.updateDocumentInList = this.updateDocumentInList.bind(this);
  }

  state = {
    heroes: {},
    queriedHeroes: {},
    documentIndexToUpdate: undefined,
    error: null
  }

  componentDidMount(){
    // Requesting the list form the API
    getAllHeroeDocuments()
    .then(allHeroes => {
      this.setState({
        heroes: allHeroes.data,
        queriedHeroes: allHeroes.data,
      });
    })
    .catch((error)=>{
      this.setState({
        error: error
      });
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.documentListSearchQuery !== prevProps.documentListSearchQuery) {
      // Every time the search query got fired, this method will be triggered to update the list
      this.searchHeroes(this.props.documentListSearchQuery);
    } else if(this.props.documentListSorted !== prevProps.documentListSorted){
      // Every time the sort button got fired, this method will be triggered to sort the list
      this.sortDocumentList(this.props.documentListSorted);
    }
  };

  // Method to load in the form for adding documents to the list
  changeDocumentListFormVisible(){
    this.setState({
      changeDocumentListFormVisible: !this.state.changeDocumentListFormVisible,
      documentIndexToUpdate: undefined // Clear the document index value when updated, so an empty form will appear when adding a document to the list
    });
  }

  // Method for adding documents to the list
  addDocumentToList(newDocument){
    var newDocumentList = [newDocument, ...this.state.heroes];
    this.setState({
      heroes: newDocumentList,
      queriedHeroes: newDocumentList,
    });
    postAddHeroeDocument(newDocument);
  }

  // Method for adding documents to the list
  updateDocumentInList(updatedDocument){
    var newDocumentList = [...this.state.heroes];
    newDocumentList[this.state.documentIndexToUpdate] = updatedDocument;
    this.setState({
      heroes: newDocumentList,
      queriedHeroes: newDocumentList,
      documentIndexToUpdate: undefined // Clear the document index value when updated, so an empty form will appear when adding a document to the list
    });
    postEditHeroeDocument(updatedDocument);
  }

  // Method to store the index of the document which needs adjustments
  documentIndexToUpdate(index){
    this.setState({
      documentIndexToUpdate: index
    });
  }

  // Method to remove documents from the list
  removeDocumentFromList(index){
    var newDocumentList = [...this.state.heroes];
    postRemoveEditHeroeDocument(newDocumentList[index]._id);
    newDocumentList.splice(index, 1);
    this.setState({
      heroes: newDocumentList,
      queriedHeroes: newDocumentList,
    });
  }

  // Method to make the list searchable
  searchHeroes = (query) => {
    let documentList = [];
    let filteredList = [];
    let newDocumentList = [];

    if (query !== "" || query !== undefined) {
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
  sortDocumentList = (sortType) => {
    let sortedList;

    if(sortType === "ascending"){
      sortedList = this.state.queriedHeroes.sort((a, b) => {
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
      });
    } else if(sortType === "descending"){
      sortedList = this.state.queriedHeroes.sort((a, b) => {
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
      });
    }
  }
  
  render() {
    // Build in an conditional statement to see if the data is represented to prevent a crash by errors
    if(this.state.heroes.length === 0 || this.state.heroes.length === undefined){
      return(
        <main>
          <button className="add-document basic-box-shadow" onClick={()=>{this.changeDocumentListFormVisible()}}>
            <img className="add-document__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/plus-icon_niqkil.svg" alt="Add button icon"/>
          </button>
          { 
            // Added a lazy conditional statement here to toggle the form for adding a document to the list
            // Passed the the functionalities through props to the form to make the functionalities work
            this.state.changeDocumentListFormVisible &&  
            <ChangeDocumentList 
              toggleChangeDocumentListForm={this.changeDocumentListFormVisible} 
              addDocumentToList={this.addDocumentToList} 
              updateDocumentInList={this.updateDocumentInList}
              documentData={this.state.heroes[this.state.documentIndexToUpdate]}
            />
          }
      </main>
      )
    } else{
      return (
        // A conditional statement to mute and unmute the document list, for this app it makes more sense to just toggle classes to prevent a new api request and new render
        <main className={this.props.documentListMuted === false ? "document-list" : "document-list--hidden"}>
          { this.state.queriedHeroes.map((heroe, index) =>(
            <section className="document-item basic-box-shadow" key={index}>
              <div className="document-item__content-box">
                <div className="document-item__signature basic-box-shadow">
                  <p>
                    {heroe.name[0]}
                  </p>
                </div>
                <div className="document-item__data">
                  <div className="document-item__top-section">
                    <div className="document-item__title basic-box-shadow">
                      <h3>{heroe.name}</h3>
                    </div>
                    <div className="document-item__numbers">
                      <p>Powers: {heroe.superPowers}</p>
                    </div>
                  </div>
                  <article className="document-item__description basic-box-shadow">
                    <p>{heroe.description}</p>
                  </article>
                </div>
              </div>
              <div className="document-item__actions-box">
                <button className="document-item__button document-item__button--edit basic-box-shadow"
                onClick={()=>{
                  this.changeDocumentListFormVisible(); 
                  this.documentIndexToUpdate(index);
                }}
                >
                  <img className="document-item__image" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/edit-icon_eyazch.svg" alt="Edit icon"/>
                </button>
                <button className="document-item__button document-item__button--remove basic-box-shadow" onClick={()=>{this.removeDocumentFromList(index)}}>
                  <img className="document-item__image" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/bin-icon_cdoalj.svg" alt="Delete icon"/>
                </button>
              </div>
            </section>
            )
          )}
          <button className="add-document basic-box-shadow" onClick={()=>{this.changeDocumentListFormVisible()}}>
            <img className="add-document__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/plus-icon_niqkil.svg" alt="Add button icon"/>
          </button>
          { // Added a lazy conditional statement here to toggle the form for adding a document to the list
            // Passed the the functionalities through props to the form to make the functionalities work
            this.state.changeDocumentListFormVisible &&  
            <ChangeDocumentList 
              toggleChangeDocumentListForm={this.changeDocumentListFormVisible} 
              addDocumentToList={this.addDocumentToList} 
              updateDocumentInList={this.updateDocumentInList}
              documentData={this.state.heroes[this.state.documentIndexToUpdate]}
            />
          }
        </main>
      )
    }
  }
}
