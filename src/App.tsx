import React from "react";
import "./App.css";
import AdvatismentWidget from "./components/Advatisment/AdvatismentWidget";
import ScopeSpeedService from "./components/ScopeSpeed/ScopeSpeedService";
import ServiceCard from "./components/ServiceCards/ServiceCard";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";
function App() {
  return (
    <div className="">
      <ScopeSpeedService />
      <ServiceCard />
      <AdvatismentWidget />
      <Services1/>
      <Services2/>
    </div>
  );
}

export default App;
