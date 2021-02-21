import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import TempToday from "./TempToday";
import sunrise from './sunrise.svg';
import sunset from './sunset.svg';

import './Today.css';

export default function Today(props) {
  return (
    <div>  
      <h1 className = "today">
        <ul>
          <li className = "date">
            <DateFormat date = {props.data.date}/>
          </li>
        <br />
          <li className = "city text-capitalize">{props.data.city}</li>
          <li>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li>
            <TempToday 
              fahrenheit = {props.data.temp} 
              highF = {props.data.high}
              lowF = {props.data.low} />
          </li>
        <br />
          <li className = "sunriseSunset">
            <span>{props.data.sunrise}AM</span>
            <img src = {sunrise} alt = "Sunrise" />
            |
            <img src = {sunset} alt = "Sunset" />
            <span>{props.data.sunset}PM</span>
          </li>
        </ul>
      </h1>
    </div>  
  );
}