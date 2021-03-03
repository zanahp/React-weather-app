import React from "react";
import WeatherIcon from "./WeatherIcon";

import './Tomorrow.css';

export default function TomorrowTemp(props) {
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
      <div className = "row tomorrow">
        <div className = "col-sm dateTomorrow">{day()}</div>
        <div className = "col-sm">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className = "col-sm highLowTomorrow">
          <span>{highF()}°</span>
          |
          <span>{lowF()}°</span>
        </div>  
      </div>
    ); 
  } else {
    return (
      <div className = "row tomorrow">
        <div className = "col-sm dateTomorrow">{day()}</div>
        <div className = "col-sm">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className = "col-sm highLowTomorrow">
          <span>{highC()}°</span>
          |
          <span>{lowC()}°</span>
        </div>  
      </div>
    ); 
  }
}