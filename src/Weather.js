import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 12:34pm</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="Sunny" />
          85°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipition:15%</li>
            <li>Humidity:40%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
