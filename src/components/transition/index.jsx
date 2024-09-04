'use client'
import { useRef, useEffect } from "react";

function index() {
    const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 300;
    const duration = 800;
    let start;

    useEffect(() => {
        setPath(initialCurve);
        setTimeout(() => {
            requestAnimationFrame(animate);
        },);
    }, []);

    const animate = (timestamp) => {
        if (start === undefined) {
            start = timestamp;
        }

        const elapsed = timestamp - start;

        loader.current.style.top =
            easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
        const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
        setPath(newCurve);
    };

    const easeOutQuad = (time, start, end, duration) => {
        return -end * (time /= duration) * (time - 2) + start;
    };

    const loaderHeight = () => {
        const loaderBounds = loader.current.getBoundingClientRect();
        return loaderBounds.height;
    };

    const setPath = (curve) => {
        const width = window.innerWidth;
        const height = loaderHeight();
        path.current.setAttributeNS(null, "d", `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
        );
    };
    return (
        <div ref={loader} className={`h-[calc(100vh+200px)] absolute top-0 w-full z-50`}>
            <svg className="w-full h-full">
                <path className="stroke-black stroke-[1px]" ref={path}></path>
            </svg>
        </div>
    )
}

export default index