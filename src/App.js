import React from "react";
import Left from "./Left";
import Right from "./Right";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row container">
        <Left className = "col-6"/>
        <Right className = "col-6"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
