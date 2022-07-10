import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
  <div className="App">
    <div className="container">
        <Weather />
        <footer>
  This project is coded by Belle Zamora and is <a href="https://github.com/lemonmeringue93/react-weather-app2" target="_blank" rel="noreferrer"> open-sourced on Github
  </a>
  </footer>
  </div>
  </div>
  );
}

export default App;
