import React, { useState } from "react";
import TomorrowTemp from "./TomorrowTemp";
import axios from "axios";

export default function Tomorrow(props) {
  const [loaded, setLoaded] = useState(false);
  const [tomorrow, setTomorrow] = useState(null);

  function tomorrowResponse(response) {
    setTomorrow(response.data);
    setLoaded(true);
  }
  function apiSearch() {
    let unit = "imperial";
    let apiKey = "bcfbf57b37e481face672611f0b20a2f";
    let apiForecast = "https://api.openweathermap.org/data/2.5/onecall?"
    let apiUrlForecast = `${apiForecast}lat=${props.lat}&lon=${props.lon}&units=${unit}&appid=${apiKey}&exclude=currently,minutely,hourly,alert`;
    axios.get(apiUrlForecast).then(tomorrowResponse);
  }

  if (loaded && props.lat === tomorrow.lat 
      && props.lon === tomorrow.lon) {
    return (
      <div>
        <TomorrowTemp data = {tomorrow.daily[1]} unit = "imperial" />
      </div>
    );
  } else {
    apiSearch();

    return null;
  }
}