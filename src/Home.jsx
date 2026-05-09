import React from "react";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Hero />
      <PopularDishes />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
