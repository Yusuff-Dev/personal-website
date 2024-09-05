import React, { useEffect, useRef } from 'react'
import Card from '../../card';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Magnetic from '../../magnetic'
import Link from 'next/link';
import { projects } from '@/utils/data'; 

function index() {

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

    return (
        <section ref={container} id='projects' className='py-[100px] relative'>
            <div className='container flex flex-col items-center gap-5 md:gap-10 relative'>
                <Magnetic>
                    <p className='text-grey text-sm uppercase mr-auto'>selected works</p>
                </Magnetic>
                <div className='w-full relative'>
                    {
                        projects.map((project, i) => {
                            let targetScale = 1 - ((projects.length - i) * 0.05);
                            return <Card key={`p_${i}`} i={i} {...project} len={projects.length} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                        })
                    }
                </div>
                <Magnetic>
                    <Link href="/works" scroll={false} className='rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                        all projects
                    </Link>
                </Magnetic>
            </div>
        </section>
    )
}

export default index