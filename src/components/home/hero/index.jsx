'use client'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa";
import Magnetic from '../../../components/magnetic'
import Locomotive from '../../locomotive'

function index() {
    return (
        <section className='min-h-screen'>
            <Locomotive>front-end developer</Locomotive>
            <div className='flex flex-col items-center gap-10 md:gap-5 container absolute bottom-10 md:bottom-5'>
                <p className='max-w-sm text-center uppercase mx-auto'>
                    Hey there , I'm Yusuf, a front-end developer with a passion for transforming ideas into captivating visual experiences.
                </p>
                <Magnetic>
                    <Link href="#projects" scroll={true} className='rounded-full border border-white-smoke text-white-smoke py-4 px-7 uppercase flex items-center gap-2 text-sm'>
                        scroll down <FaArrowDown className='animate-bounce'/>
                    </Link>
                </Magnetic>
                <div className='flex items-center justify-between w-full'>
                    <Magnetic><p className='uppercase text-[0.75rem]'>available for work</p></Magnetic>
                    <Magnetic><p className='uppercase text-[0.75rem]'>portfolio 2024</p></Magnetic>
                </div>
            </div>
        </section>
    )
}

export default index

// —