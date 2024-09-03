"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function index({ children }) {
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
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.03 * direction;
    };
    return (
        <div className="h-screen relative overflow-hidden">
            <div className={`absolute top-2/3`}>
                <div ref={slider} className={`relative whitespace-nowrap`}>
                    <p className="locomotive text-black !font-medium" ref={firstText}>{children}</p>
                    <p className="locomotive text-black !font-medium" ref={secondText}>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default index

// Front-end Developer —