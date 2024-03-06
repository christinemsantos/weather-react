import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h4>
        <FormattedDate date={props.data.date} />
      </h4>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <img src={props.data.iconUrl} alt="Sunny" />
          {Math.round(props.data.temperature)}°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
