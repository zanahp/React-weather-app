import React from "react";

import './Forecast.css';

export default function Forecast() {
  return (
    <div className = "forecast row">
      <div className = "col-6">
        <ul className = "weekday">
          <li>Monday</li>
          <li>
            <img src = "" alt = "weather icon" className = "iconForecast"/>
          </li>
          <li>
            <span>85°</span>
            |
            <span>75°</span>
          </li>
        </ul>
      </div>

      <div className = "col-6">
        <ul className = "weekday">
          <li>Tuesday</li>
          <li>
            <img src = "" alt = "weather icon" className = "iconForecast"/>
          </li>
          <li>
            <span>85°</span>
            |
            <span>75°</span>
          </li>
        </ul>
      </div>

      <div className = "col-6">
        <ul className = "weekday">
          <li>Wednesday</li>
          <li>
            <img src = "" alt = "weather icon" className = "iconForecast"/>
          </li>
          <li>
            <span>85°</span>
            |
            <span>75°</span>
          </li>
        </ul>
      </div>

      <div className = "col-6">
        <ul className = "weekday">
          <li>Thursday</li>
          <li>
            <img src = "" alt = "weather icon" className = "iconForecast"/>
          </li>
          <li>
            <span>85°</span>
            |
            <span>75°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}