import React, { Component } from 'react';
import RigaHobby from './RigaHobby';
import hobbyList from './listahobby'

class Stock extends Component {
    constructor(props) {
        super(props)
    
        this.state = { price: this.props.price, hobby: [], counter: 0 };

        setInterval(() => {
            this.updateState();
        }, 3000);
    }

    updateState = () => {
        this.setState((state, props) => ({
            price: state.price + 1,
        }));

        if (hobbyList[this.state.counter]) {
            this.setState((state, props) => ({
                hobby: [...state.hobby, hobbyList[state.counter]],
                counter: state.counter + 1
            }));
        }
    }

    render() {
        const { name, founder } = this.props;
        return (
            <div>
                <h3>Figlio: {name}</h3>
                <p>Fondatore: {founder}</p>
                <p>Prezzo delle azioni: {this.state.price}</p>
                { this.state.price >= 10 ? <p>Vendere</p> : <p>Comprare</p>}
                { this.props.corporateCapital >= 15000000 ? <h3>Azioni salgono</h3> : <h6>Azioni scendono</h6> }
                <p>Lista Hobby</p>
                <ul>{ this.state.hobby.map(item => <RigaHobby item={item} />)}</ul>
            </div>
        )
    }
}

export default Stock;