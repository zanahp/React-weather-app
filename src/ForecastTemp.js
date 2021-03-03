///ForecastTemp

import React from "react";
import WeatherIcon from "./WeatherIcon";

import './Forecast.css';

export default function ForecastTemp(props) {
  const unit = "imperial";

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];

    return day; 
  }
  function highF() {
    let highF = Math.round(props.data.temp.max);
    return `${highF}`;
  }
  function lowF() {
  let lowF = Math.round(props.data.temp.min);
  return `${lowF}`;
  }
  function highC() {
    let highC = Math.round((highF - 32) * 5 / 9);
    return `${highC}`;
  }
  function lowC() {
    let lowC = Math.round((lowF - 32) * 5 / 9);
    return `${lowC}`;
  }

if (unit === props.unit) {
  return (
    <div className = "forecast row">
      <div className = "col-6">
        <ul className = "weekday">
          <li>{day()}</li>
          <li>
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li>
            <span>{highF()}°</span>
            |
            <span>{lowF()}°</span>
          </li>
        </ul>
      </div>
    </div>
  );
} else {
  return (
    <div className = "forecast row">
      <div className = "col-6">
        <ul className = "weekday">
          <li>{day()}</li>
          <li>
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li>
             <span>{highC()}°</span>
            |
            <span>{lowC()}°</span>
          </li>
        </ul>
      </div>
    </div>
  );
  }
}