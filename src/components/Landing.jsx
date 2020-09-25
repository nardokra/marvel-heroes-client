/* This is a really small component for as home / fall back page */

import React, { Component } from 'react';
import './Landing.scss';

export default class Landing extends Component {
  state = {
    page: "landing"
  }

  render() {
    return (
      <main className={this.props.documentListMuted === true ? "landing-content" : "landing-content--hidden"}>
        <div className="landing-content__title">
          <h1>FIND YOUR NEXT FRONT-END HEROE!</h1>
        </div>
      </main>
    )
  }
}
