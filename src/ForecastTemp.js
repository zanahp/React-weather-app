import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import './Forecast.css';

export default function ForecastTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

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

    return {day}; 
  }
  function highLowF() {
  setUnit("fahrenheit");
  let highF = Math.round(props.data.temp.max);
  let lowF = Math.round(props.data.temp.min);

  return (
    <div>
      <span>{highF}°</span>
        |
      <span>{lowF}°</span>
    </div>
  );
}
function highLowC() {
  setUnit("celsius");
  let highC = Math.round((highLowF.highF - 32) * 5 / 9);
  let lowC = Math.round((highLowF.lowF - 32) * 5 / 9);

  return (
    <div>
      <span>{highC}°</span>
        |
      <span>{lowC}°</span>
    </div>
  );
}
if (unit === "fahrenheit") {
  return (
    <div className = "forecast row">
      <div className = "col-6">
        <ul className = "weekday">
          <li>{day()}</li>
          <li>
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li>
            {highLowF}
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
            {highLowC}
          </li>
        </ul>
      </div>
    </div>
  );
  }
}