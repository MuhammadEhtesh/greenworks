import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ScopeSpeedService from "./components/ScopeSpeedService";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";

function App() {
  return (
    <div className="">
      <Navbar />
      <ScopeSpeedService />
      <Services1/>
      <Services2/>
    </div>
  );
}

export default App;
