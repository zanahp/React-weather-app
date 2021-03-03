import React, { useState } from "react";

export default function TodayTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function celsius() {
    return Math.round((props.fahrenheit - 32) * 5 / 9);
  }
  function highC() {
    return Math.round((props.highF - 32) * 5 / 9);
  }
  function lowC() {
    return Math.round((props.lowF - 32) * 5 / 9);
  }

  if (unit === "fahrenheit") {
    return (
    <div>
      <li>
        <span className = "currentTemp">{props.fahrenheit}°</span>
        <span className = "active">F</span>
        |
        <a href = "null" className = "active" onClick = {showC}>C</a>
      </li>
      <li className = "highLowToday">
        <span>{props.highF}°</span>
        <span>{props.lowF}°</span>
      </li>
    </div>  
    );
  } else {
    return (
      <div>
      <li>
        <span className = "currentTemp">{celsius()}°</span>
          <a href = "null" className = "active" onClick = {showF}>F</a>
          | 
          <span className = "active">C</span> 
      </li>
      <li className = "highLowToday">
        <span>{highC()}°</span>
        <span>{lowC()}°</span>
      </li>
    </div> 
    );
  }
}