import React, { Component } from 'react';
import './App.css';
import Stock from './Stock';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { showMsg: false }
    this.stockList = [
      {name: 'appl', founder: 'Jobs', corporateCapital: 10000000, price: 5},
      {name: 'GOOG', founder: 'Brin', corporateCapital: 50000000, price: 12},
      {name: 'AMZN', founder: 'Bezos', corporateCapital: 9000000, price: 10}
    ]
  }

  sendMessage = (evt) => {
    this.setState({ showMsg: this.toggleShowMsg() });
  }

  toggleShowMsg() {
    return this.state.showMsg ? false : true
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.sendMessage}>Applicazione React</p>
          { this.state.showMsg && <p>Messaggio Nascosto</p>}
          { this.stockList.map(item => <Stock name={item.name.toUpperCase()} founder={item.founder} corporateCapital={item.corporateCapital} age={30} price={item.price} /> ) }       
        </header>
      </div>
    );
  }
}

export default App;
