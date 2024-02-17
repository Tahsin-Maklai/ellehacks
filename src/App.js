import logo from './logo.svg';
import './App.css';
import {Read} from './components/read.js';
import {CSVReader} from './components/parse.js';
import {Alert} from './components/notification.js';
import {Push} from './components/push.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Alert/>
        <CSVReader/>
        <Push/>
        <Read/>

      </header>
    </div>
  );
}

export default App;
