/* 
  This is a really small component as home / fall back page.
  This one will appear when you mute the document list.
*/

import React, { Component } from 'react';
import './Home.scss';

export default class Landing extends Component {
  render() {
    return (
      <main className={this.props.documentListMuted === true ? "home-content" : "home-content--hidden"}>
        <div className="home-content__title">
          <h1>FIND YOUR NEXT FRONT-END HEROE!</h1>
        </div>
      </main>
    )
  }
}
