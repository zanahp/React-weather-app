import React from "react";
import WeatherIcon from "./WeatherIcon";

import './Forecast.css';

export default function ForecastTemp(props) {
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
  
  let highF = Math.round(props.data.temp.max);
  let lowF = Math.round(props.data.temp.min);
  let highC = Math.round((highF - 32) * 5 / 9);
  let lowC = Math.round((lowF - 32) * 5 / 9);

  if (props.unit === "imperial") {
    return (
      <div className = "col-6">
        <ul className = "weekday">
          <li>{day()}</li>
          <li>
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li>
            <span>{highF}°</span>
            {" "}|{" "}
            <span>{lowF}°</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className = "col-6">
        <ul className = "weekday">
          <li>{day()}</li>
          <li>
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li>
            <span>{highC}°</span>
            {" "}|{" "}
            <span>{lowC}°</span>
          </li>
        </ul>
      </div>
    );
  }
}