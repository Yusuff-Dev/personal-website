'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from '../../../components/magnetic'
import Link from 'next/link';

const Card = ({ i, progress, range, targetScale }) => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const rotate = useTransform(scrollYProgress, [0, 1], [7, 0]);

    return (
        <div ref={container} className={`sticky top-0 h-screen`}>
            <motion.div
                style={{ scale, rotate, top: `calc(5vh + ${i * 25}px)` }}
                className={`rounded-[16px] origin-top relative bg-card-bg border border-alternate max-w-lg h-[512px] py-16 px-8 ml-auto flex flex-col justify-between`}
            >
                    <Magnetic>
                        <p className='text-[3rem] text-alternate w-max'>{`0${i + 1}`}</p>
                    </Magnetic>
                    <Magnetic>
                        <h3 className='font-humane text-[6rem] text-white-smoke uppercase leading-[1] break-words'>Technocorp IT Company</h3>
                    </Magnetic>
                    <p className='text-grey uppercase text-[16px] font-[300]'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis neque corporis accusantium quibusdam voluptate, magni repellat, ipsum temporibus eos tempora eum harum perspiciatis, voluptas id provident saepe magnam qui assumenda.
                    </p>
            </motion.div>
        </div>
    )
}

export default Card