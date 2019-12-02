import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="text" id="city" />
          <input type="submit" value="search" />
        </form>
        <h1>Arvore</h1>
        <div>
          {" "}
          <img
            src="https://icon-library.net/images/weather-sun-icon/weather-sun-icon-4.jpg"
            alt="icon"
          ></img>
          <p>
            <div>12</div>
            <div>°C</div>|<div>°F</div>
          </p>
        </div>
        <div className="col-row">
          <div className="col-2">Mon</div>
          <div className="col-2">Tue</div>
          <div className="col-2">Wne</div>
          <div className="col-">The</div>
          <div className="col-">Fri</div>
          <div className="col-2">Sat</div>
          <div className="col-2">Sun</div>
        </div>
      </header>
    </div>
  );
}

export default App;
