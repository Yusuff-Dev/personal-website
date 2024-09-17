'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, progress, range, targetScale, children, src }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const rotate = useTransform(scrollYProgress, [0, 1], [7, 0]);

    return (
        <div ref={container} className={`h-screen sticky top-0`}>
            <motion.div
                style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${src})`, scale, rotate, top: `calc(5vh + ${i * 25}px)`
                }}
                className={`h-full rounded-[25px] p-4 md:p-10 origin-top relative bg-no-repeat bg-center bg-cover`}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Card