import './App.css';
import Stock from './Stock';

function App() {
  const stockList = [
    {name: 'appl', founder: 'Jobs', corporateCapital: 10000000},
    {name: 'GOOG', founder: 'Brin', corporateCapital: 50000000},
    {name: 'AMZN', founder: 'Bezos', corporateCapital: 9000000}
  ]

  return (
    <div className="App">
      <header className="App-header">
        { stockList.map(item => <Stock name={item.name.toUpperCase()} founder={item.founder} corporateCapital={item.corporateCapital} age={30} /> ) }       
      </header>
    </div>
  );
}

export default App;
