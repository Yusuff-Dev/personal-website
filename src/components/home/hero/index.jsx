'use client'
import Link from 'next/link'
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import Magnetic from '../../../components/magnetic'
import Locomotive from '../../locomotive'

function index() {
    return (
        <section id='hero' className='h-screen' data-text='01'>
            <div className='absolute w-full top-0 z-10'>
                <div className='container flex flex-col gap-4 py-[150px] md:flex-row justify-between'>
                    <div className='flex flex-col gap-2 items-center sm:items-start'>
                        <h1 className='text-6xl font-bold text-black break-words capitalize text-center sm:text-start'>front-end developer</h1>
                        <p className='text-gray-500 text-3xl capitalize'>who loves design</p>
                        <div className='flex items-center flex-wrap gap-4 mt-5 w-full'>
                            <Magnetic>
                                <Link href="https://t.me/as_introvert" scroll={false} target='blanc' className='group rounded-full border border-black px-5 text-black p-2 flex items-center justify-center gap-1 grow sm:grow-0'>
                                    <FaTelegram size={25} className='text-black' />
                                    Telegram
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="https://linkedin.com/in/yusuf-abdurasulov-47a702210" scroll={false} target='blanc' className='group rounded-full border border-black px-5 text-black p-2 flex items-center justify-center gap-1 grow sm:grow-0'>
                                    <FaLinkedin size={25} className='text-black' />
                                    LinkedIn
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="https://linkedin.com/in/yusuf-abdurasulov-47a702210" scroll={false} target='blanc' className='group rounded-full border border-black px-5 text-black p-2 flex items-center justify-center gap-1 grow sm:grow-0'>
                                    <FaGithub size={25} className='text-black' />
                                    Github
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </div>

            <Locomotive>Abdurasulov Muxriddin —</Locomotive>
        </section>
    )
}

export default index