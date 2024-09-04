"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function index({ children, dur }) {
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
            x: "-1000px",
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }

        if(firstText.current){
            gsap.set(firstText?.current, { xPercent: xPercent });
        }
        if(secondText.current){
            gsap.set(secondText?.current, { xPercent: xPercent });
        }

        requestAnimationFrame(animate);
        xPercent += dur * direction;
    };

    return (
        <div className="relative overflow-hidden h-screen mx-auto">
            <div className={`absolute top-1/3 md:top-1/2 -translate-y-1/2`}>
                <div ref={slider} className={`relative whitespace-nowrap`}>
                    <p className="locomotive text-white-smoke uppercase mx-3" ref={firstText}>{children}</p>
                    <p className="locomotive text-white-smoke uppercase mx-3" ref={secondText}>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default index

// Front-end Developer —