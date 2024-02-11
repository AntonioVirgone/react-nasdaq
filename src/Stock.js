import React, { Component } from 'react';
import RigaHobby from './RigaHobby';

class Stock extends Component {
    constructor(props) {
        super(props)
    
        this.hobby = ['element1','element2','element3'];
    }
    

  render() {
    const { name, founder } = this.props;
    return (
      <div>
        <h3>Figlio: {name}</h3>
        <p>Fondatore: {founder}</p>
        <p>Lista Hobby</p>
        <ul>{ this.hobby.map(item => <RigaHobby item={item} />)}</ul>
      </div>
    )
  }
}

export default Stock;