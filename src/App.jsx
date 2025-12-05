import React from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import ScrollFeature from "./pages/ScrollFeature";
import LeadCRMSection from "./pages/LeadCRMSection";
// import HowItWorks from "./pages/HowItWork";
import Testimonials from "./pages/Testimonials";
import CRMDataEnrichment from "./pages/CRMDataEnrichment";
import SupportedLeadCRM from "./pages/SupportedLeadCRM";
import JoinThousand from "./pages/JoinThousand";
import Footer from "./component/Footer";
import HowItWork from "./pages/HowItWork";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />/
      <ScrollFeature />
      <LeadCRMSection />
      <HowItWork/>
      <Testimonials />
      <CRMDataEnrichment/>
      <SupportedLeadCRM/>
      <JoinThousand/>
      <Footer/>
    </div>
  );
};

export default App;
