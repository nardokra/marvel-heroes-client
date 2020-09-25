/* I decided to make the list a component, in this way I can keep the code clean
and separate the concerns. */

import React, { Component } from 'react';
import './DocumentList.scss';

export default class Documentlist extends Component {
  state = {
    heroes: this.props.heroes.data.results
  }

  componentWillUnmount() {
    
  }

  // editDocumentItem = () => {
  //   this.setState();
  // }

  render() {
    return (
      <main className="document-list">
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
                  <p>Powers: Power1, Power2, Power3, Power4</p>
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
            <button className="document-item__button basic-box-shadow">
              <img className="document-item__image" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/bin-icon_cdoalj.svg" alt="Delete icon"/>
            </button>
          </div>
        </section>
        )
      )}
      <button className="add-document basic-box-shadow">
        <img className="add-document__img" src="https://res.cloudinary.com/dconurgxl/image/upload/v1600936413/acato%20challenge/plus-icon_niqkil.svg" alt="Add button icon"/>
      </button>
      </main>
    )
  }
}
