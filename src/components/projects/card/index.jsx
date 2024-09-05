'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, progress, range, targetScale, children }) => {

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
                style={{ scale, rotate, top: `calc(5vh + ${i * 25}px)` }}
                className={`w-full rounded-[25px] origin-top`}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Card