import React, { useState } from "react";
import DateFormat from "./DateFormat";
import Search from "./Search";
import sunrise from './sunrise.svg';
import sunset from './sunset.svg';

import './Today.css';

export default function Today() {
  const [weatherData, setWeatherData] = useState({complete: false});

  function searchResponse(response) {
    setWeatherData( {
      complete: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      iconAltText: response.data.weather[0].description,
      temp: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      sunrise: (response.data.sys.sunrise + response.data.timezone),
      sunset: (response.data.sys.sunset + response.data.timezone)
    });
  }

    if (weatherData.complete) {
      return (
        <h1 className = "today">
          <ul>
            <li className = "date">
             <DateFormat date = {weatherData.date}/>
            </li>
          <br />
            <li className = "city">{weatherData.city}</li>
            <li>
              <img src = {weatherData.icon} alt = "wether icon" />
            </li>
            <li>
              <span className = "currentTemp">{weatherData.temp}°</span>
              <span>
                <a href = "null" className = "active">F</a>
              </span>
              |
              <span>
                <a href = "null" className = "active">C</a>
              </span>
            </li>
            <li className = "highLowToday">
              <span>{weatherData.high}°</span>
              <span>{weatherData.low}°</span>
            </li>
          <br />
            <li className = "sunriseSunset">
              <span>{weatherData.sunrise}AM</span>
              <img src = {sunrise} alt = "Sunrise" />
              |
              <img src = {sunset} alt = "Sunset" />
              <span>{weatherData.sunset}PM</span>
            </li>
          </ul>
        </h1>
      );
    } else {
      Search();
      return "Loading. . .";
      }  
}