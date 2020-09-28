/* I decided to make the list a component, in this way I can keep the code clean
and separate the concerns. */

import React, { Component } from 'react';
import './DocumentList.scss';
import ChangeDocumentList from './ChangeDocumentList';

export default class Documentlist extends Component {
  constructor(props) {
    super(props);
    this.changeDocumentListFormVisible = this.changeDocumentListFormVisible.bind(this);
    this.addDocumentToList = this.addDocumentToList.bind(this);
    this.updateDocumentInList = this.updateDocumentInList.bind(this);
  }

  state = {
    heroes: this.props.heroes,
    documentIndexToUpdate: undefined
  }

  // Method to load in the form for adding documents to the list
  changeDocumentListFormVisible(){
    this.setState({
      changeDocumentListFormVisible: !this.state.changeDocumentListFormVisible,
      documentIndexToUpdate: undefined // Clear the document index value when updated, so an empty form will appear when adding a document to the list
    })
  }

  // Method for adding documents to the list
  addDocumentToList(newDocument){
    var newDocumentList = [newDocument, ...this.state.heroes];
    this.setState({
      heroes: newDocumentList
    })
  }

  // Method for adding documents to the list
  updateDocumentInList(updatedDocument){
    var newDocumentList = [...this.state.heroes];
    newDocumentList[this.state.documentIndexToUpdate] = updatedDocument;
    this.setState({
      heroes: newDocumentList,
      documentIndexToUpdate: undefined // Clear the document index value when updated, so an empty form will appear when adding a document to the list
    })
  }

  // Method to store the index of the document which needs adjustments
  documentIndexToUpdate(index){
    this.setState({
      documentIndexToUpdate: index
    })
  }

  // Method to remove documents from the list
  removeDocumentFromList(index){
    var newDocumentList = [...this.state.heroes];
    newDocumentList.splice(index, 1);
    this.setState({
      heroes: newDocumentList
    })
  }

  render() {
    // Build in an statement to see if the data is represented to prevent a crash by errors
    if(this.state.heroes.length === 0){
      return(
        <main className={this.props.documentListMuted === false ? "document-list__no-data" : "document-list__no-data--hidden"}>
          <h1 className="landing-content__title">An error occured, no data available at the moment.. </h1>
        </main>
      )
    } else{
      return (
        <main className={this.props.documentListMuted === false ? "document-list" : "document-list--hidden"}>
          { this.props.heroes.map((heroe, index) =>(
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
          { // Added a lazy condition here to toggle the form for adding a document to the list
            // Passed in props to make it possible to lift up the state for the functionalities to update de document list
            // and passed in the props to load in the data in the form when using de "edit" functionality and to make the conditions work for rendering the form
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
