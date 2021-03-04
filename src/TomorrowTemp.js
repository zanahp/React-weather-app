import React from "react";
import WeatherIcon from "./WeatherIcon";

import './Tomorrow.css';

export default function TomorrowTemp(props) {
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
      <div className = "row tomorrow">
        <div className = "col-sm dateTomorrow">{day()}</div>
        <div className = "col-sm">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className = "col-sm highLowTomorrow">
          <span>{highF}°</span>
          |
          <span>{lowF}°</span>
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
          <span>{highC}°</span>
          |
          <span>{lowC}°</span>
        </div>  
      </div>
    ); 
  }
}