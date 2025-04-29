import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

import LandingPage from "./components/LandingPage"
import Marque from "./components/Marque"
import About from "./components/About"
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {

  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container className="min-h-screen h-full text-white">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
