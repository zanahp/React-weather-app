import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
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
            <span className = "currentTemp">{props.data.temp}°</span>
            <span>
              <a href = "null" className = "active">F</a>
            </span>
            |
            <span>
              <a href = "null" className = "active">C</a>
            </span>
          </li>
          <li className = "highLowToday">
            <span>{props.data.high}°</span>
            <span>{props.data.low}°</span>
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