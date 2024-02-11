import React, { Component } from 'react';
import FiglioStock from './FiglioStock';

class Stock extends Component {
  render() {
    return (
      <React.Fragment>
        <FiglioStock name="APPLE" />
        <FiglioStock age="18"/>
      </React.Fragment>
    )
  }
}

export default Stock;