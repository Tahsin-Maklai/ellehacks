import logo from './logo.svg';
import './App.css';
import {Read} from './components/read.js';
import {CSVReader} from './components/parse.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <CSVReader/>
        <Read/>
      </header>
    </div>
  );
}

export default App;
