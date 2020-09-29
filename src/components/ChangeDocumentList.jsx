/* 
  I decided to make a separate component for the overlay popup for adding a document to the list, 
  in this way I can keep the code clean and separate the concerns. 
  For de styling of the form validation I use a Npm package, the @material-ui/core. I needed to overwrite some parts.
  I applied some conditional rendering to make the form suitable for adding documents and to editing documents 
  to prevent repeating code.
*/

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './ChangeDocumentList.scss';

// Overwriting some styling from the @material-ui/core
const formStylingMaiOverwrite = {
  width: "500px",
  height: "70px",
  boxSizing: "border-box",
  resize: "none",
  marginBottom: "20px"
}

export default class AddDocumenttolist extends Component {
  state = {
    formState: {},
    formValidationErrors: {}
  }
  
  componentDidMount(){
    // This conditional statement checks if there is data to be edit
    if(this.props.documentData !== undefined){
      this.setState({
        formState: this.props.documentData
      })
    }
  }

  // Method to handle the form changes
  handleChangeFormState = (event) => { 
    let newFormState = {...this.state.formState};
    newFormState[event.target.name] = event.target.value;
    this.setState({
      formState: newFormState
    })
  }

  // Method to validate the form input
  validateFormInput = (event) => {
    if(event.target.name === "name"){
      if(!this.state.formState.name || this.state.formState.name.length < 4 ){
        let newFormValidationErrors = {...this.state.formValidationErrors};
        newFormValidationErrors.nameError = "Use a min. of 4 characters";
        newFormValidationErrors.nameErrorBoolean = true;
        this.setState({
          formValidationErrors: newFormValidationErrors
        })
      } else{
        let newFormValidationErrors = {...this.state.formValidationErrors};
        delete newFormValidationErrors.nameError;
        delete newFormValidationErrors.nameErrorBoolean;
        this.setState({
          formValidationErrors: newFormValidationErrors
        })
      }
    } else if(event.target.name === "description"){
      if(!this.state.formState.description || this.state.formState.description.split(' ').length < 10 || this.state.formState.description.split(' ').length > 55){
        let newFormValidationErrors = {...this.state.formValidationErrors};
        newFormValidationErrors.descriptionError = "Use a min. 10 and a max. of 55 words";
        newFormValidationErrors.descriptionErrorBoolean = true;
        this.setState({
          formValidationErrors: newFormValidationErrors
        }) 
      } else{
        let newFormValidationErrors = {...this.state.formValidationErrors};
        delete newFormValidationErrors.descriptionError;
        delete newFormValidationErrors.descriptionErrorBoolean;
        this.setState({
          formValidationErrors: newFormValidationErrors
        })
      }
    } else if(event.target.name === "superPowers"){
      if(!this.state.formState.superPowers || this.state.formState.superPowers === "" || this.state.formState.superPowers.split(',').length > 3){
        let newFormValidationErrors = {...this.state.formValidationErrors};
        newFormValidationErrors.superPowersError = "Use a min. of 1 and a max. of 3 super powers seperated by a space"
        newFormValidationErrors.superPowersErrorBoolean = true;
        this.setState({
          formValidationErrors: newFormValidationErrors
        }) 
      } else{
        let newFormValidationErrors = {...this.state.formValidationErrors};
        delete newFormValidationErrors.superPowersError;
        delete newFormValidationErrors.superPowersErrorBoolean;
        this.setState({
          formValidationErrors: newFormValidationErrors
        })
      }
    }
  }

  // Method for submitting the form
  submitForm = (event) => {
    if(this.state.formValidationErrors.nameError === undefined && this.state.formValidationErrors.descriptionError === undefined && this.state.formValidationErrors.superPowersError === undefined){
      if(this.props.documentData === undefined){
        // lifting up the state to add the document to the list
        this.props.addDocumentToList(this.state.formState);
      } else{
        // lifting up the state to edit the document in the list
        this.props.updateDocumentInList(this.state.formState);
      }
        // lifting up the state to toggle the form after submitting
      this.props.toggleChangeDocumentListForm(); 
    }
  }

  render() {
    return (
      <div className="add-document-overlay">
        <form className="add-document-form basic-box-shadow">
          <p className="add-document-form__close" onClick={() => {this.props.toggleChangeDocumentListForm()}}>X</p>
          <h2 className="add-document-form__h2">{this.props.documentData === undefined ? "ADD YOUR HEROE" : "EDIT YOUR HEROE"}</h2>
          <TextField
            style={formStylingMaiOverwrite}
            required
            name="name"
            label="Heroe name"
            placeholder="f.e. Spider-Man.."
            value={this.state.name}
            defaultValue={this.props.documentData === undefined ? "" : this.props.documentData.name}
            onChange={(event)=>{this.handleChangeFormState(event)}}
            onBlur={(event)=>{this.validateFormInput(event)}}
            helperText={this.state.formValidationErrors.nameError}
            variant="outlined"
            error={this.state.formValidationErrors.nameErrorBoolean}
          />
          <TextField
            style={formStylingMaiOverwrite}
            required
            name="description"
            label="Heroe description"
            placeholder="f.e. Bitten by a radioactive spider.."
            value={this.state.description}
            defaultValue={this.props.documentData === undefined ? "" : this.props.documentData.description}
            onChange={(event)=>{this.handleChangeFormState(event)}}
            onBlur={(event)=>{this.validateFormInput(event)}}
            variant="outlined"
            helperText={this.state.formValidationErrors.descriptionError}
            error={this.state.formValidationErrors.descriptionErrorBoolean}
          />
          <TextField
            style={formStylingMaiOverwrite}
            required
            name="superPowers"
            label="Super powers"
            placeholder="f.e. Power, Claws, Healing"
            value={this.state.superPowers}
            onChange={(event)=>{this.handleChangeFormState(event)}}
            onBlur={(event)=>{this.validateFormInput(event)}}
            defaultValue={this.props.documentData === undefined ? "" : this.props.documentData.superPowers}
            variant="outlined"
            helperText={this.state.formValidationErrors.superPowersError}
            error={this.state.formValidationErrors.superPowersErrorBoolean}
          />
          { // Condition to toggle the submit button, so they can't submit without filling the input fields.
            this.state.formState.name && this.state.formState.description && this.state.formState.superPowers
            ?
            <button 
              className="add-document-form__submit-button add-document-form__submit-button--active basic-box-shadow" 
              onClick={(event)=>{
                event.preventDefault();
                this.submitForm();
              }}>
              {this.props.documentData === undefined ? "Add now" : "Edit now" /* Condition based on the props to make the form dynamic for editing or adding */}
            </button>
            :
            <button 
              className="add-document-form__submit-button add-document-form__submit-button--inactive basic-box-shadow">
              {this.props.documentData === undefined ? "Add now" : "Edit now" /* Condition based on the props to make the form dynamic for editing or adding*/}
            </button>
          }
        </form>
      </div>
    )
  }
}
