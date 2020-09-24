/* I decided to make the Menu / Navigation a component,
because you could reuse the Menu easily if you would 
add more pages to the project */

import React, { Component } from 'react';
import './Menu.scss';
import logo from '../images/500_acato-marvel-logo.png';

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
          <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936415/acato%20challenge/search-icon_suvrnh.svg" alt="Search icon"/>
          <button className="basic-box-shadow">Search</button>
        </section>
        <section className="menu__sort">
          <button className="menu__sort--ascending basic-box-shadow">
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/ascending-icon_jpu1mh.svg" alt="Ascending icon"/>
          </button>
          <button className="menu__sort--descending basic-box-shadow">
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936414/acato%20challenge/descending-icon_mn3kqm.svg" alt="Descending icon"/>
          </button>
          <button className="menu__sort--mute basic-box-shadow">
            <img src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936412/acato%20challenge/mute-icon_ype6db.svg" alt="Mute and unmute icon"/>
          </button>
        </section>
      </nav>
    )
  }
}
