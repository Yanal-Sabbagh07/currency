import React from "react";
import { Converter } from "./components/Converter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="upper-container">
          <img src="./logo.png" alt="hatch" className="logo" />
          <h1 className="header">Convert currencies in Real-time.</h1>
        </div>
        <Converter />
        <div className="footer-container">
          <div className="statment">
            1 EUR = <br /> <span>1.12392 USD</span>
          </div>
          <div className="history">View conversion history</div>
        </div>
      </div>
    </div>
  );
}

export default App;
