import React from "react";

export default function DateFormat(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let weekday = weekdays[props.date.getDay()];

  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[props.date.getMonth()];

  let day = props.date.getDate();
  
  return <div>{weekday}, {month} {day}</div>;
}