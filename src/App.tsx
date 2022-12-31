import React from "react";
import "./App.css";
import AdvatismentWidget from "./components/Advatisment/AdvatismentWidget";
import Certifications from "./components/certifications/Certifications";
import ContactInfo from "./components/contactinfo/ContactInfo";
import GreenFooter from "./components/Footer/GreenFooter";
import Inspection from "./components/Inspection/Inspection";
import Local from "./components/LocalPic/Local";
import QueetForm from "./components/QueetForm/QueetForm";
import Review from "./components/Reviews/Review";
import ScopeSpeedService from "./components/ScopeSpeed/ScopeSpeedService";
import ServiceCard from "./components/ServiceCards/ServiceCard";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <ScopeSpeedService />
      <ServiceCard />
      <AdvatismentWidget />
      <Services1 />
      <Services2 />
      <Local />
      {/* <Inspection /> */}
      <Review />
      <ContactInfo />
      <Testimonials />
      <QueetForm />
      <Certifications />
      <GreenFooter />
    </div>
  );
}

export default App;
