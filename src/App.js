import React from "react";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <form>
          <input type="text" placeholder="Enter city" id="city" />
          <input type="submit" value="search" />
        </form>
        <h1>Arvore</h1>
        <div>
          {" "}
          <img
            src="https://icon-library.net/images/weather-sun-icon/weather-sun-icon-4.jpg"
            alt="icon"
          ></img>
          <span className="temperature">12</span>
          <span className="celsius">°C</span>|<span className="far">°F</span>
        </div>
        <br /> <br />
      </header>
      <a href="https://github.com/Simona-de/blue">open source</a> by Simona
      Delogu
    </div>
  );
}

export default App;
