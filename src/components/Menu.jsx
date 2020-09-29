/* 
  I decided to make the menu / navigation a component, to keep it clean and to seprate concerns.
  I Used sepaprate methods for triggering the methods in the parent file (lifting up the state). 
  I did this to make is easier for other developers to spot which functionalities are build into
  this file. The other way would be to directly trigger them via the props.
*/

import React, { Component } from 'react';
import './Menu.scss';
import logo from '../images/500_acato-marvel-logo.png';

export default class Menu extends Component {

  state = {
    documentListMuted: false,
    documentListSearchQuery: "",
    documentListSorted: "",
  }

  // Method to mute the document list
  muteDocumentList = () => {
    this.setState({
      documentListMuted: !this.state.documentListMuted
    });

    // Lifting up the state
    this.props.muteDocumentList(!this.state.documentListMuted);
  }

  // Method to update the search query state
  updateSearchQueryState = (searchQuery) =>{
    this.setState({
      documentListSearchQuery: searchQuery.target.value
    });
    
    // Conditional to reset the document list, when removing the query
    if(searchQuery.target.value.length < this.state.documentListSearchQuery.length){

      // Lifting up the state
      this.props.updateSearch(searchQuery.target.value);
    }
  }

  // Method to update the document list based on the search query
  searchHeroes = (searchQuery) => {

    // Lifting up the state
    this.props.updateSearch(searchQuery);
  }

  // Method to make the document list ascending
  sortDocumentListAscending = () => {
    this.setState({
      documentListSorted: "ascending"
    });

    // Lifting up the state
    this.props.updateSort("ascending");
  }

  // Method to make the document list descending
  sortDocumentListDescending = () => {
    this.setState({
      documentListSorted: "descending"
    });

    // Lifting up the state
    this.props.updateSort("descending");
  }

  render() {
    return (
      <nav className="menu basic-box-shadow">
        <div className="menu__logo">
          <img className="menu__logo__img" src={logo} alt="logo"/>
        </div>
        <form className="menu__search">
          <input type="text" className="menu__search__input basic-box-shadow" placeholder="Find your Heroe! Search by name or super power.." value={this.state.searchQuery} onChange={(event)=>{ this.updateSearchQueryState(event) }}/>
          <img className="menu__search__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936415/acato%20challenge/search-icon_suvrnh.svg" alt="Search icon" onClick={(event)=>{ event.preventDefault(); this.searchHeroes(this.state.documentListSearchQuery)}}/>
          <button className="menu__search__button basic-box-shadow" onClick={(event)=>{ event.preventDefault(); this.searchHeroes(this.state.documentListSearchQuery)}}>Search</button>
        </form>
        <section className="menu__sort">
          <button className="menu__sort__button menu__sort__button--ascending basic-box-shadow" onClick={()=>{this.sortDocumentListAscending()}}>
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/ascending-icon_jpu1mh.svg" alt="Ascending icon"/>
          </button>
          <button className="menu__sort__button menu__sort__button--descending basic-box-shadow" onClick={()=>{this.sortDocumentListDescending()}}>
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/descending-icon_mn3kqm.svg" alt="Descending icon"/>
          </button>
          <button className="menu__sort__button basic-box-shadow" onClick={()=>{this.muteDocumentList()}}>
            {
              this.state.documentListMuted === true ? 
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936412/acato%20challenge/unmute-icon_yy9rmr.svg" alt="Unute icon"/> :
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936412/acato%20challenge/mute-icon_ype6db.svg" alt="Mute icon"/>
            }
          </button>
        </section>
      </nav>
    )
  }
}
