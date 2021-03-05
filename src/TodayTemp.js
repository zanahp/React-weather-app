import React from "react";

export default function TodayTemp(props) {
  function showF(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function showC(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  let celsius = Math.round((props.fahrenheit - 32) * 5 / 9);
  let highC = Math.round((props.highF - 32) * 5 / 9);
  let lowC = Math.round((props.lowF - 32) * 5 / 9);
  
  if (props.unit === "imperial") {
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
          {" "}|{" "}
          <span>{props.lowF}°</span>
        </li>
      </div>  
    );
  } else {
    return (
      <div>
        <li>
          <span className = "currentTemp">{celsius}°</span>
            <a href = "null" className = "active" onClick = {showF}>F</a>
            | 
            <span className = "active">C</span> 
        </li>
        <li className = "highLowToday">
          <span>{highC}°</span>
          {" "}|{" "}
          <span>{lowC}°</span>
        </li>
      </div> 
    );
  }
}