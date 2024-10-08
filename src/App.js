import React from "react";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/Services";
import Products from "./components/Product";
import Programs from "./components/Programs";
import Portfolio from "./components/Portfolio";
import ClientSection from "./components/clientSection";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <AboutUs />
      <OurServices />
      <Products />
      <Programs />
      <Portfolio />
      <ClientSection />
      <OurTeam />
      <Testimonials />
    </div>
  );
}

export default App;
