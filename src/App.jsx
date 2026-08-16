import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Residences from "./sections/Residences";
import Experience from "./sections/Experience";
import Manifesto from "./sections/Manifesto";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = night ? "night" : "day";
  }, [night]);

  return (
    <>
      <Cursor />
      <Navbar night={night} setNight={setNight} />
      <main>
        <Hero night={night} setNight={setNight} />
        <Intro />
        <Residences />
        <Experience />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
