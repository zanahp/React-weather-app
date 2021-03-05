import React, { useState } from "react";
import Today from "./Today";
import Tomorrow from "./Tomorrow";
import Forecast from "./Forecast";
import axios from "axios";
import button from "./button.svg";

import './Search.css';

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("imperial");

  function searchResponse(response) {
    setWeatherData( {
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      iconAltText: response.data.weather[0].description,
      temp: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      sunrise: (response.data.sys.sunrise + response.data.timezone),
      sunset: (response.data.sys.sunset + response.data.timezone),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    } );
  }
  function search() {
    const apiKey = "bcfbf57b37e481face672611f0b20a2f";
    const apiWeather = "https://api.openweathermap.org/data/2.5/weather?";
    let apiWeatherUrl = `${apiWeather}q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiWeatherUrl).then(searchResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className = "row">
        <div className = "col-6">
          <form onSubmit = {handleSubmit}>
            <input  className = "col-10" 
                    type = "text" 
                    placeholder = "New York, Paris, etc." 
                    onChange = {cityChange}/>
            <button className = "col-1">
              <img  src = {button} 
                    alt = "search button" />
            </button> 
          </form>
          <Today 
            data = {weatherData}
            unit = {unit}
            setUnit = {setUnit} />
        </div>
        <div className = "col-6">
          <Tomorrow 
            lat = {weatherData.lat} 
            lon = {weatherData.lon} 
            unit = {unit} />
          <Forecast 
            lat = {weatherData.lat} 
            lon = {weatherData.lon} 
            unit = {unit} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading. . .";
  }
}