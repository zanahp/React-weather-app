import React from "react";
import { WeatherIcon } from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMap = {
    "01d": {WiDaySunny},
    "01n": {WiNightClear},
    "02d": {WiDayCloudy},
    "02n": {WiNightAltCloudy},
    "03d": {WiCloud},
    "03n": {WiCloud},
    "04d": {WiCloudy},
    "04n": {WiCloudy},
    "09d": {WiDayRainMix},
    "09n": {WiNightAltRainMix},
    "10d": {WiDayRain},
    "10n": {WiNightAltRain},
    "11d": {WiDayLightning},
    "11n": {WiNightAltLightning},
    "13d": {WiDaySnowWind},
    "13n": {WiNightAltSnowWind},
    "50d": {WiDayFog},
    "50n": {WiNightFog}
  };
  
  return (
    <div>
    <{codeMap[props.code]} size={24} color='#000' />
    </div>
  );
}