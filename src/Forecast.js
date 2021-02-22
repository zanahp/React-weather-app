import React, { useState } from "react";
import axios from "axios";

export default function ForecastTemp(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast({
      daily: response.data.daily,
      lat: response.data.lat,
    });
    setLoaded(true);
  }
  function apiSearch() {
    let apiKey = "bcfbf57b37e481face672611f0b20a2f";
    let apiForecast = "https://api.openweathermap.org/data/2.5/onecall?"
    let apiUrlForecast = `${apiForecast}lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${apiKey}&exclude=currently,minutely,hourly,alert`;
    axios.get(apiUrlForecast).then(forecastResponse);
  }

  if (loaded && props.lat === forecast.lat) {
    return (
      <div>
        <ForecastTemp data = {forecast[2]} />
        <ForecastTemp data = {forecast[3]} />
        <ForecastTemp data = {forecast[4]} />
        <ForecastTemp data = {forecast[5]} />
      </div>
    );
  } else {
    apiSearch();

    return null;
  }
}