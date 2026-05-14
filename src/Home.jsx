import React from "react";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Hero />
      <PopularDishes />
    </main>
  );
}
