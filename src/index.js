import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Youtubecounter from "./Components/Youtube/Youtubecounter";

function App() {
  return (
    <div className="App">
      <p>BLACKPINK Subs Now</p>
      <Youtubecounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
