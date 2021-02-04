import { func } from "prop-types";
import React from "react";

export default function Today() {
  return (
    <h1>
      <ul>
        <li>Saturday, November 14</li>
      <br />
        <li>Miami</li>
        <li>
          <img src = "" alt = "wether icon" />
        </li>
        <li>
          <span>85°</span>
          <span>
            <a href = "null">F</a>
          </span>
          |
          <span>
            <a href = "null">C</a>
          </span>
        </li>
        <li>
          <span>85°</span>
          <span>75°</span>
        </li>
      <br />
        <li>
          <span>6:40AM</span>
          <img src = "src/sunrise.svg" alt = "Sunrise" />
          |
          <img src = "src/sunset.svg" alt = "Sunset" />
          <span>5:30PM</span>
        </li>
      </ul>
    </h1>
  );
}