'use client'
import React, { useEffect, useRef } from 'react'
import Card from './timelineCard';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

function index() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const projects = Array.from({ length: 4 }, (_, index) => "Slide " +  (index + 1));


  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  });

  return (
    <section ref={container} id='projects' className='relative'>
      <div className='container flex flex-col items-center gap-5 md:gap-10 relative'>
      <p className='text-[calc(5rem+5vw)] text-white-smoke font-humane uppercase w-full'>— education & work</p>
        <div className='w-full relative'>
          {
            projects.map((project, i) => {
              let targetScale = 1 - ((projects.length - i) * 0.05);
              return <Card key={`p_${i}`} i={i} {...project} len={projects.length} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default index