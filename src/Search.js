import React from "react";

import './Search.css';

export default function Search() {
  return (
    <form>
      <input className = "col-10" type = "text" placeholder = "New York, Paris, etc." />
      <button className = "col-1">
        <img src = "./button.svg" alt = "search button" />
      </button> 
    </form>
  );
}