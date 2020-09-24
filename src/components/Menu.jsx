import React, { Component } from 'react';
import logo from '../images/500_acato-marvel-logo.png';
import searchIcon from '../images/search-icon.svg';
import ascendingIcon from '../images/ascending-icon.svg';
import descendingIcon from '../images/descending-icon.svg';
import muteIcon from '../images/mute-icon.svg';
import './Menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
  }

  state = {
         
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {
    
  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {
    return (
      <nav className="menu basic-box-shadow">
        <div className="menu__logo">
          <img className="menu__logo--img" src={logo} alt="logo"/>
        </div>
        <section className="menu__search">
          <input type="text" class="input basic-box-shadow" placeholder="Which heroe are you looking for?"/>
          <img src={searchIcon} alt="Search icon"/>
          <button className="basic-box-shadow">Search</button>
        </section>
        <section className="menu__sort">
          <button className="menu__sort--ascending basic-box-shadow">
            <img src={ascendingIcon} alt="Ascending icon"/>
          </button>
          <button className="menu__sort--descending basic-box-shadow">
            <img src={descendingIcon} alt="Descending icon"/>
          </button>
          <button className="menu__sort--mute basic-box-shadow">
            <img src={muteIcon} alt="Mute and unmute icon"/>
          </button>
        </section>
      </nav>
    )
  }
}
