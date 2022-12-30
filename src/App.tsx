import React from "react";
import "./App.css";
import AdvatismentWidget from "./components/Advatisment/AdvatismentWidget";
import ScopeSpeedService from "./components/ScopeSpeed/ScopeSpeedService";
import ServiceCard from "./components/ServiceCards/ServiceCard";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <ScopeSpeedService />
      <ServiceCard />
      <AdvatismentWidget />
    </div>
  );
}

export default App;
