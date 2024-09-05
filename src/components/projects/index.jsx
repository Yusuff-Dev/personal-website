import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from './card';

function index({ children, data }) {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    });

    if(!data) return <p className='text-2xl text-center uppercase'>coming soon...</p>

    return (
        <div ref={container}>
            {
                data?.map((item, i) => {
                    let targetScale = 1 - ((data.length - i) * 0.05);
                    return <Card key={`p_${i}`} i={i} {...item} len={data.length} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}>{children}</Card>
                })
            }
        </div>
    )
}

export default index