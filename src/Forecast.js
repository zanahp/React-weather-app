import React, { useState } from "react";
import ForecastTemp from "./ForecastTemp";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastAll, setForecastAll] = useState(null);
  const [latitude, setLatitude] = useState(null);

  function forecastResponse(response) {
    setLatitude(response.data.lat);
    setForecastAll(response.data.daily);
    setLoaded(true);
  }
  function apiSearch() {
    let apiKey = "bcfbf57b37e481face672611f0b20a2f";
    let apiForecast = "https://api.openweathermap.org/data/2.5/onecall?"
    let apiUrlForecast = `${apiForecast}lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${apiKey}&exclude=currently,minutely,hourly,alert`;
    axios.get(apiUrlForecast).then(forecastResponse);
  }

  if (loaded && props.lat === latitude) {
    return (
      <div>
        <ForecastTemp data = {forecastAll[2]} unit = {props.unit} />
        <ForecastTemp data = {forecastAll[3]} unit = {props.unit} />
        <ForecastTemp data = {forecastAll[4]} unit = {props.unit} />
        <ForecastTemp data = {forecastAll[5]} unit = {props.unit} />
      </div>
    );
  } else {
    apiSearch();

    return null;
  }
}