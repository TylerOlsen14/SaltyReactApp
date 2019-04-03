import React, { Component } from 'react'

export class client extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.clients.name }</p>
      </div>
    )
  }
}

export default client
