import React from "react";

import './Tomorrow.css';

export default function Tomorrow() {
  return (
    <div className = "row tomorrow">
      <div className = "col-sm dateTomorrow">Sunday</div>
      <div className = "col-sm">
        <img src = "" alt = "weather icon" />
      </div>
      <div className = "col-sm highLowTomorrow">
        <span>85°</span>
        |
        <span>75°</span>
      </div>  
    </div>
  );
}