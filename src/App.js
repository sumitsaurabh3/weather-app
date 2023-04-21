import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          
        </a>{" "}
         Developed by{" "}
        <a target="_blank" href="/">
         Sumit Saurabh
       
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
