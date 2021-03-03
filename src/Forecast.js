///Forecast

import React, { useState } from "react";
import ForecastTemp from "./ForecastTemp";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  function apiSearch() {
    let unit = "imperial";
    let apiKey = "bcfbf57b37e481face672611f0b20a2f";
    let apiForecast = "https://api.openweathermap.org/data/2.5/onecall?"
    let apiUrlForecast = `${apiForecast}lat=${props.lat}&lon=${props.lon}&units=${unit}&appid=${apiKey}&exclude=currently,minutely,hourly,alert`;
    axios.get(apiUrlForecast).then(forecastResponse);
  }

  if (loaded && props.lat === forecast.lat 
      && props.lon === forecast.lon) {
    return (
      <div>
      <div className = "row">
        <ForecastTemp data = {forecast.daily[2]} unit = "imperial"/>
        <ForecastTemp data = {forecast.daily[3]} unit = "imperial"/>
      </div>
      <div className = "row">
        <ForecastTemp data = {forecast.daily[4]} unit = "imperial"/>
        <ForecastTemp data = {forecast.daily[5]} unit = "imperial"/>
      </div>
      </div>
    );
  } else {
    apiSearch();

    return null;
  }
}