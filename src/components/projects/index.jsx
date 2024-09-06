import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from './card';
import Magnetic from '../../components/magnetic'
import Link from 'next/link';

function index({ data, h }) {

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

    if (!data) return <p className='text-2xl text-center uppercase'>coming soon...</p>

    return (
        <div ref={container}>
            {
                data?.map((item, i) => {
                    let targetScale = 1 - ((data.length - i) * 0.05);
                    return (
                        <Link key={`p_${i}`} href={`/works/${item.name}`}>
                            <Card  i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} h={h} src={item.src}>
                                <div className='flex items-center justify-between flex-wrap'>
                                    <div className='flex items-center'>
                                        <Magnetic>
                                            <button className='px-7 py-2 text-dark-grey uppercase text-5xl font-humane'>
                                                {`(0${i + 1} / 0${data.length})`}
                                            </button>
                                        </Magnetic>
                                        <Magnetic>
                                            <button className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                                                {item.name}
                                            </button>
                                        </Magnetic>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Magnetic>
                                            <button className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                                                {item.title}
                                            </button>
                                        </Magnetic>
                                        <Magnetic>
                                            <button className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                                                {item.date}
                                            </button>
                                        </Magnetic>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default index