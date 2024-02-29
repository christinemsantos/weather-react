import React, { useState } from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`The temperature in ${city} is 20 degrees.`);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={changeCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
