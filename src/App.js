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
    <div className="Container">
      <div className="App">
        <Search />
        <City forecastCity="Chicago" />
        <Forecast description="partly cloudy" humidity={45} windSpeed={3} />
        <Temperature temperature={65} />
      </div>
      <br />
      <a href="https://github.com/kathrynsteg/weather-app-react">
        GitHub Repository
      </a>
    </div>
  );
}

export default App;
