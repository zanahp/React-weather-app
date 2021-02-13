import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";
import button from './button.svg';

import './Search.css';


export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiKey = "bcfbf57b37e481face672611f0b20a2f";
    let apiWeather = "https://api.openweathermap.org/data/2.5/weather?";
    let apiWeatherUrl = `${apiWeather}q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiWeatherUrl).then(Today.searchResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input className = "col-10" type = "text" placeholder = "New York, Paris, etc." onChange = {cityChange}/>
      <button className = "col-1">
        <img src = {button} alt = "search button" />
      </button> 
    </form>
  );
}