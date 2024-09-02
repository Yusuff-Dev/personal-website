'use client'
import Locomotive from '../../locomotive'
import TextAnimation from '../../textAnimation'
import Github from '../github/github'
import Link from 'next/link'
import { FaTelegram, FaLinkedin } from "react-icons/fa";

function index() {
    return (
        <div className='relative h-screen'>
            <div className='absolute w-full top-0 z-10'>
                <div className='container flex flex-col gap-4 py-[150px] md:flex-row justify-between'>
                    <div className='flex flex-col gap-2 items-center sm:items-start'>
                        <h2 className='text-5xl font-medium text-zinc-300 break-words capitalize text-center sm:text-start'>front-end developer</h2>
                        <p className='text-zinc-400 text-2xl capitalize'>who loves design</p>
                        <div className='flex items-center flex-wrap gap-4 mt-5 w-full'>
                            <Link href="https://t.me/as_introvert" scroll={false} target='blanc' className='group rounded-full border px-5 text-zinc-300 p-2 flex items-center justify-center gap-1 grow sm:grow-0'>
                                <FaTelegram size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                                <TextAnimation>Telegram</TextAnimation>
                            </Link>
                            <Link href="https://linkedin.com/in/yusuf-abdurasulov-47a702210" scroll={false} target='blanc' className='group rounded-full border px-5 text-zinc-300 p-2 flex items-center justify-center gap-1 grow sm:grow-0'>
                                <FaLinkedin size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                                <TextAnimation>LinkedIn</TextAnimation>
                            </Link>
                        </div>
                    </div>

                    <div className=''>
                        <Github />
                    </div>
                </div>
            </div>

            <Locomotive>Abdurasulov Muxriddin —</Locomotive>
        </div>
    )
}

export default index