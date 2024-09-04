'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from '../magnetic'
import Link from 'next/link';

const Card = ({ i, len, title, name, data, src, progress, range, targetScale }) => {

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
                style={{ backgroundImage: `url(/img/${src})`, scale, rotate, top: `calc(5vh + ${i * 25}px)` }}
                className={`h-[90vh] w-full rounded-[25px] p-4 md:p-10 origin-top relative bg-no-repeat bg-center bg-cover`}
            >
                <div className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center'>
                <Magnetic>
                    <Link href="/works" scroll={false} className='px-7 py-2 text-dark-grey uppercase text-5xl font-humane'>
                        {`(0${i+1} / 0${len})`}
                    </Link>
                </Magnetic>
                <Magnetic>
                    <Link href="/works" scroll={false} className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                        {name}
                    </Link>
                </Magnetic>
                    
                </div>
                <div className='flex items-center gap-3'>
                <Magnetic>
                    <Link href="/works" scroll={false} className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                        {title}
                    </Link>
                </Magnetic>
                <Magnetic>
                    <Link href="/works" scroll={false} className='rounded-full bg-grey px-7 py-2 text-dark-grey uppercase text-sm'>
                        {data}
                    </Link>
                </Magnetic>
                </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card