"use client";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

import Image from "next/image";
// import TextAnimation from "../components/textAnimation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };

  return (
    <main>
      <header className="grid grid-cols-1 sm:grid-cols-[1fr,_2fr] gap-5 container grid-rows-[400px,_200px]">
        <div className=" rounded-2xl p-5 border">
          <h1>Abdurasulov Muxriddin</h1>
        </div>
        <div className=" rounded-2xl p-5 row-span-2 border">
          <Scene />
        </div>
        <div className="rounded-2xl p-5 border">
          asfsdfasdf
        </div>
      </header>
      {/* <header className="h-screen relative overflow-hidden">
        <div className={`sliderContainer`}>
          <div ref={slider} className={`slider`}>
            <p ref={firstText} className="capitalize">
              Front-end Developer —
            </p>
            <p ref={secondText} className="capitalize">
              Front-end Developer —
            </p>
          </div>
        </div> 
         <div>
          <Scene />
        </div>
      </header> */}
    </main>
  );
}
