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
        { this.props.corporateCapital >= 15000000 ? <h3>Azioni salgono</h3> : <h6>Azioni scendono</h6> }
        <p>Lista Hobby</p>
        <ul>{ this.hobby.map(item => <RigaHobby item={item} />)}</ul>
        
      </div>
    )
  }
}

export default Stock;