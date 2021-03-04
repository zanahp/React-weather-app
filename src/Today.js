import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import TodayTemp from "./TodayTemp";
import TimeFormat from "./TimeFormat";

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
            <TodayTemp 
              fahrenheit = {props.data.temp} 
              highF = {props.data.high}
              lowF = {props.data.low}
              unit = {props.unit}
              setUnit = {props.setUnit} />
          </li>
        <br />
          <li className = "sunriseSunset">
            <TimeFormat 
              sunrise = {props.data.sunrise} 
              sunset = {props.data.sunset} />
          </li>
        </ul>
      </h1>
    </div>  
  );
}