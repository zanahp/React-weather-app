import React from "react";

export default function Search() {
  return (
    <form>
      <input type = "text" placeholder = "New York, Paris, etc." />
      <button>
        <img src = "src/button.svg" alt = "search button" />
      </button> 
    </form>
  );
}