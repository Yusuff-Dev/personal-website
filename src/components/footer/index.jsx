'use client'
import Magnetic from '../magnetic'
import Link from "next/link";

function index() {
  return (
    <footer className='mt-auto'>
      <div className="container py-10">
        <div className='flex items-center justify-center font-[14px] leading-[1] gap-x-8 gap-y-2 uppercase text-white-smoke whitespace-nowrap flex-wrap'>
          <Magnetic>
            <Link href="https://t.me/as_introvert" scroll={false} target='blanc' className=''>
              Telegram
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="https://linkedin.com/in/yusuf-abdurasulov-47a702210" scroll={false} target='blanc' className=''>
              LinkedIn
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="https://github.com/Yusuff-Dev" scroll={false} target='blanc' className=''>
              Github
            </Link>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}

export default index