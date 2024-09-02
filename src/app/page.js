"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from '../components/preloader'
import Hero from '../components/home/hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}

      <Hero/>
      {/*

      <Landing />

      <Description />

      <Projects />

      <SlidingImages />

      <Contact /> */}
      
    </main>
  );
}
