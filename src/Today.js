import React from "react";

import './Today.css';

export default function Today() {
  return (
    <h1 className = "today">
      <ul>
        <li className = "date">Saturday, November 14</li>
      <br />
        <li className = "city">Miami</li>
        <li>
          <img src = "" alt = "wether icon" />
        </li>
        <li>
          <span className = "currentTemp">85°</span>
          <span>
            <a href = "null" className = "active">F</a>
          </span>
          |
          <span>
            <a href = "null" className = "active">C</a>
          </span>
        </li>
        <li className = "highLowToday">
          <span>85°</span>
          <span>75°</span>
        </li>
      <br />
        <li className = "sunriseSunset">
          <span>6:40AM</span>
          <img src = "./sunrise.svg" alt = "Sunrise" />
          |
          <img src = "./sunset.svg" alt = "Sunset" />
          <span>5:30PM</span>
        </li>
      </ul>
    </h1>
  );
}