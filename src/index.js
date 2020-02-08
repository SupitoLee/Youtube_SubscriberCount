import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Youtubecounter from "./Components/Youtube/Youtubecounter";

function App() {
  return (
    <div className="App">
      <h1>BLACKPINK Subs Count</h1>
      <h2>
        <Youtubecounter />
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
