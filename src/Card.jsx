import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="card">
        <h1 className="title">Title</h1>
        <h2 className="data">{props.value}</h2>
      </article>
    )
  }
}
