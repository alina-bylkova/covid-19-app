import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <article className="card">
        <h1 className="title">{this.props.name}</h1>
        <h2 className="data">{this.props.value}</h2>
      </article>
    );
  }
}
