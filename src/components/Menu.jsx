/* I decided to make the menu / navigation a component,
because you can reuse the menu in this way */

import React, { Component } from 'react';
import './Menu.scss';
import logo from '../images/500_acato-marvel-logo.png';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props)
    // this.handleEvent = this.handleEvent.bind(this)
  }

  state = {
    documentListMuted: true
  }

  componentDidMount() {
    if(window.location.pathname === "/"){
      this.setState({
        documentListMuted: true
      })
    } else{
      this.setState({
        documentListMuted: false
      })
    }
  }

  // Function to mute and unmute the list with documents
  updateStateMuteButton = () => { 
    this.setState({
      documentListMuted: !this.state.documentListMuted
    }) 
  }

  // Function to update the state of the search query
  updateSearchQuery = () => {

  }

  render() {
    return (
      <nav className="menu basic-box-shadow">
        <div className="menu__logo">
          <img className="menu__logo__img" src={logo} alt="logo"/>
        </div>
        <section className="menu__search">
          <input type="text" className="menu__search__input basic-box-shadow" placeholder="Which heroe are you looking for?"/>
          <img className="menu__search__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936415/acato%20challenge/search-icon_suvrnh.svg" alt="Search icon"/>
          <button className="menu__search__button basic-box-shadow">Search</button>
        </section>
        <section className="menu__sort">
          <button className="menu__sort__button basic-box-shadow">
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/ascending-icon_jpu1mh.svg" alt="Ascending icon"/>
          </button>
          <button className="menu__sort__button basic-box-shadow">
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/descending-icon_mn3kqm.svg" alt="Descending icon"/>
          </button>
          {/* This is a conditional to mute and unmate the list with documents based on the state */}
          <Link to={this.state.documentListMuted === true ? "/heroes" : "/"}>
            <button className="menu__sort__button basic-box-shadow" onClick={()=>{this.updateStateMuteButton()}}>
            {this.state.documentListMuted === true ? 
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936412/acato%20challenge/unmute-icon_yy9rmr.svg" alt="Unute icon"/> :
              <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936412/acato%20challenge/mute-icon_ype6db.svg" alt="Mute icon"/>
              }
            </button>
          </Link>
        </section>
      </nav>
    )
  }
}
