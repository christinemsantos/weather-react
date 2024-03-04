import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
