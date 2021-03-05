import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayRainMix,
  WiNightAltRainMix,
  WiDayRain,
  WiNightAltRain,
  WiDayLightning,
  WiNightAltLightning,
  WiDaySnowWind,
  WiNightAltSnowWind,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMap = {
    "01d": <WiDaySunny size={90} color="#000" />,
    "01n": <WiNightClear size={90} color="#000" />,
    "02d": <WiDayCloudy size={90} color="#000" />,
    "02n": <WiNightAltCloudy size={90} color="#000" />,
    "03d": <WiCloud size={90} color="#000" />,
    "03n": <WiCloud size={90} color="#000" />,
    "04d": <WiCloudy size={90} color="#000" />,
    "04n": <WiCloudy size={90} color="#000" />,
    "09d": <WiDayRainMix size={90} color="#000" />,
    "09n": <WiNightAltRainMix size={90} color="#000" />,
    "10d": <WiDayRain size={90} color="#000" />,
    "10n": <WiNightAltRain size={90} color="#000" />,
    "11d": <WiDayLightning size={90} color="#000" />,
    "11n": <WiNightAltLightning size={90} color="#000" />,
    "13d": <WiDaySnowWind size={90} color="#000" />,
    "13n": <WiNightAltSnowWind size={90} color="#000" />,
    "50d": <WiDayFog size={90} color="#000" />,
    "50n": <WiNightFog size={90} color="#000" />,
  };

  return (
    <div>{codeMap[props.code]}</div>
  );
}