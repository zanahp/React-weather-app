import React from "react";
import sunrise from './sunrise.svg';
import sunset from './sunset.svg';

export default function TimeFormat(props) {
  function time(dt) {
    let day = new Date(dt * 1000);
    let hour = day.getUTCHours();
      hour = (hour % 12) || 12;
      if (hour < 10) {
        hour = `0${hour}`;
      } else { 
        hour = hour; 
      }
    let minutes = day.getUTCMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      } else {
        minutes = minutes;
      }
    return `${hour}:${minutes}`;  
  }

  return (
    <div>
      <span>{time(props.sunrise)}AM</span>
      {" "}
      <img src = {sunrise} alt = "Sunrise" />
      |
      <img src = {sunset} alt = "Sunset" />
      {" "}
      <span>{time(props.sunset)}PM</span>
    </div>
    );
}  