import logo from './logo.svg';
import './App.css';
import FiglioWithoutStatus from './FiglioWithoutStatus';
import FiglioWithStatus from './FiglioWithStatus'
import Stock from './Stock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FiglioWithStatus />
        <FiglioWithoutStatus />
        <table>
        <tbody>
          <tr>
            <Stock />
          </tr>
          </tbody>
        </table>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 32
        </a>
      </header>
    </div>
  );
}

export default App;
