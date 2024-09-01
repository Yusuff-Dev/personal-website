"use client";
// import dynamic from "next/dynamic";
// const Scene = dynamic(() => import("@/components/Scene"), {
//   ssr: false,
// });

// import Image from "next/image";
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
      <header className="h-screen relative overflow-hidden">
        <div className={`sliderContainer`}>
          <div ref={slider} className={`slider`}>
            <p ref={firstText} className="uppercase">
              Front-end Developer —
            </p>
            <p ref={secondText} className="uppercase">
              Front-end Developer —
            </p>
          </div>
        </div>
        {/* <div>
          <Scene />
        </div> */}
      </header>
    </main>
  );
}
