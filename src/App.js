import './App.css';
import Stock from './Stock';

function App() {
  const stockList = [
    {name: 'appl', founder: 'Jobs'},
    {name: 'GOOG', founder: 'Brin'},
    {name: 'AMZN', founder: 'Bezos'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        { stockList.map(item => <Stock name={item.name.toUpperCase()} founder={item.founder} /> ) }       
      </header>
    </div>
  );
}

export default App;
