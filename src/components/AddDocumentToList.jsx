/* I decided to make a separate component for the overlay popup for adding a document to the list, 
in this way I can keep the code clean and separate the concerns. */

import React, { Component } from 'react';
import './AddDocumentToList.scss';

export default class Adddocumenttolist extends Component {
  constructor(props) {
    super(props);
    this.handleChangeFormState = this.handleChangeFormState.bind(this);
  }

  state = {
    formState: {}
  }

  handleChangeFormState = (event) => { 
    let newFormState = {...this.state.formState};
    newFormState[event.target.name] = event.target.value;
    this.setState({
      formState: newFormState
    }) 
  }

  render() {
    return (
      <div className="add-document-overlay">
        <main className="add-document-form basic-box-shadow">
          <h2 className="add-document-form__h2">ADD YOUR HEROE</h2>
          <p className="add-document-form__close" onClick={() => {this.props.toggleAddDocumentToListForm()}}>X</p>
          <input className="add-document-form__input add-document-form__input--name" type="text" name="name" id="heroeName" onChange={(event)=>{this.handleChangeFormState(event)}} placeholder="Full heroe name f.e. Spider-Man.."/>
          <textarea className="add-document-form__input add-document-form__input--description" type="text" name="description" id="heroeDescription" onChange={(event)=>{this.handleChangeFormState(event)}} placeholder="Heroe description, A short story.."/>
          <textarea className="add-document-form__input add-document-form__input--super-powers" type="text" name="superPowers" id="heroeSuperPowers" onChange={(event)=>{this.handleChangeFormState(event)}} placeholder="Name at least 1 super power, and max 3.."/>
          <div className="add-document-form__submit">
            <button 
              className="add-document-form__submit-button basic-box-shadow" 
              onClick={()=>{
                // lifting up the state to toggle the form after submitting
                this.props.toggleAddDocumentToListForm(); 
                // lifting up the state to add the document to the list
                this.props.addDocumentToList(this.state.formState);
              }}>
              Add now
            </button>
          </div>
        </main>
      </div>
    )
  }
}
