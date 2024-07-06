import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import City from "./City";
import "./City.css";
import Forecast from "./Forecast";
import "./Forecast.css";
import Search from "./Search";
import "./Search.css";
import Temperature from "./Temperature";
import "./Temperature.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
