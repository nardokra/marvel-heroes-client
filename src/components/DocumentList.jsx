/* I decided to make the list a component, in this way I can keep the code clean
and separate the concerns. */

import React, { Component } from 'react';
import './DocumentList.scss';
import AddDocumentToList from './AddDocumentToList';

export default class Documentlist extends Component {
  constructor(props) {
    super(props);
    this.addDocumentToListFormVisible = this.addDocumentToListFormVisible.bind(this);
    this.addDocumentToList = this.addDocumentToList.bind(this);
  }

  state = {
    heroes: this.props.heroes.data
  }

  // function to load in the form for adding documents to the list
  addDocumentToListFormVisible(){
    this.setState({
      addDocumentToListFormVisible: !this.state.addDocumentToListFormVisible
    })
  }

  // function for adding documents to the list
  addDocumentToList(updatedDocumentList){
    var newDocumentList = [...this.state.heroes, updatedDocumentList];
    this.setState({
      heroes: newDocumentList
    })
  }

  // function to remove documents from the list
  removeDocumentFromList(index){
    var newDocumentList = [...this.state.heroes];
    newDocumentList.splice(index, 1);
    this.setState({
      heroes: newDocumentList
    })
  }

  render() {
    // build in an statement to see if the data is represented to prevent a crash by errors
    if(this.state.heroes.length === 0){
      return(
        <main className={this.props.documentListMuted === false ? "document-list__no-data" : "document-list__no-data--hidden"}>
          <h1 className="landing-content__title">An error occured, no data available at the moment.. </h1>
        </main>
      )
    } else{
      return (
        <main className={this.props.documentListMuted === false ? "document-list" : "document-list--hidden"}>
          { this.state.heroes.map((heroe, index) =>(
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
                <button className="document-item__button basic-box-shadow">
                  <img className="document-item__image" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/edit-icon_eyazch.svg" alt="Edit icon"/>
                </button>
                <button className="document-item__button basic-box-shadow" onClick={()=>{this.removeDocumentFromList(index)}}>
                  <img className="document-item__image" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/bin-icon_cdoalj.svg" alt="Delete icon"/>
                </button>
              </div>
            </section>
            )
          )}
          <button className="add-document basic-box-shadow" onClick={()=>{this.addDocumentToListFormVisible()}}>
            <img className="add-document__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/plus-icon_niqkil.svg" alt="Add button icon"/>
          </button>
          { // added a lazy condition here to toggle the form for adding a document to the list
          this.state.addDocumentToListFormVisible &&  <AddDocumentToList toggleAddDocumentToListForm={this.addDocumentToListFormVisible} addDocumentToList={this.addDocumentToList}/>}
        </main>
      )
    }
  }
}
