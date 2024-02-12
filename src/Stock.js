import React, { Component } from 'react';
import RigaHobby from './RigaHobby';
import hobbyList from './listahobby'

class Stock extends Component {
    constructor(props) {
        super(props)
    
        this.state = { price: this.props.price, hobby: [], counter: 0, isActive: false };

        setInterval(() => {
            this.updateState();
        }, 3000);
    }

    updateState = () => {
        if (hobbyList[this.state.counter]) {
            this.setState((state, props) => ({
                hobby: [...state.hobby, hobbyList[state.counter]],
                counter: state.counter + 1
            }));
        }
    }

    updatePrice = () => {
        this.setState((state, props) => ({
            price: state.price + 1,
        }));
    }

    realTime = () => {
        this.setState((state, props) => ({
            isActive: !state.isActive,
        }));

        if (this.state.isActive) {
            this.intervalID = setInterval(() => {
                this.updatePrice();
            }, 3000);
        } else {
            clearInterval(this.intervalID)
        }
    }

    render() {
        const { name, founder } = this.props;
        return (
            <div>
                <h3>Figlio: {name}</h3>
                <p>Fondatore: {founder}</p>
                <p>Prezzo delle azioni: {this.state.price}</p>
                <button onClick={this.realTime}>Aggiorno</button>
                { this.state.price >= 10 ? <p>Vendere</p> : <p>Comprare</p>}
                { this.props.corporateCapital >= 15000000 ? <h3>Azioni salgono</h3> : <h6>Azioni scendono</h6> }
                <p>Lista Hobby</p>
                <ul>{ this.state.hobby.map(item => <RigaHobby item={item} />)}</ul>
            </div>
        )
    }
}

export default Stock;