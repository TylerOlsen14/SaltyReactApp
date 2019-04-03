import React, { Component } from 'react';
import Header from './Header'
import IndividualClient from './IndividualClient'
import PropTypes from 'prop-types';

class Clients extends Component {
  render() {
    return this.props.Clients.map((client)=> {
        <IndividualClient key={client.name}client={client}/>
    });
  }
}

Clients.PropTypes={
  clients: PropTypes.object.isRequired
}

export default Clients;
