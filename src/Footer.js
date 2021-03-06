import React from "react";

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        <a href = "https://github.com/zanahp/react-weather-app" target = "_blank" className = "links" rel="noreferrer">
          Open-source code
        </a>
        {" "} by {" "} 
        <a href = "www.linkedin.com/in/zanah-paret" target = "_blank" className = "links">
        Zanah Paret
        </a>
      </p>
    </footer>
  );
}