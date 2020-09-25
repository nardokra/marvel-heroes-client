/* I decided to make a separate component for the overlay popup for adding a document to the list, 
in this way I can keep the code clean and separate the concerns. */

import React, { Component } from 'react'

export default class Adddocumenttolist extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    this.handleEvent = this.handleEvent.bind(this)
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
      <>
        
      </>
    )
  }
}
