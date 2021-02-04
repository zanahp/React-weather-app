import React from "react";
import Left from "./Left";
import Right from "./Right";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App row container">
      <Left />
      <Right />
      <Footer />
    </div>
  );
}

export default App;
