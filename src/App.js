import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Left from "./Left";
import Right from "./Right";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container row">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
