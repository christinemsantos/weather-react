import "./App.css";
import "./index.css";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <WeatherSearch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
