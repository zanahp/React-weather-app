import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="container">
        <Search defaultCity = "Miami" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
