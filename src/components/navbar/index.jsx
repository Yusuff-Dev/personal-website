'use client'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar'
import Magnetic from '../magnetic'

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname]);

  const handleOpen = () => setIsActive(!isActive)

  return (
    <>
      <nav className='fixed top-0 right-0 z-50 py-10'>
        <div className="container flex items-center justify-end">
          <Magnetic>
            <div onClick={handleOpen} className="rounded-full bg-dark-grey px-3 flex items-center h-12 relative select-none cursor-pointer">
              <p className={`text-white-smoke font-inter text-[13px] ${isActive ? 'opacity-0' : 'opacity-100'} duration-500`}>MENU</p>
              <p className={`text-white-smoke font-inter text-[13px] ${isActive ? 'opacity-100' : 'opacity-0'} duration-500`}>CLOSE</p>
              <button className={`absolute top-1 rounded-full w-10 h-10 flex flex-col gap-1 items-center justify-center bg-zinc-300 ${isActive ? 'left-1' : 'left-full -translate-x-[calc(100%+4px)]'} duration-500 ease-in`}>
                <span className={`border border-bg-black block w-4 ${isActive ? 'rotate-45 translate-y-[3px]' : ''} duration-300`}></span>
                <span className={`border border-bg-black block w-4 ${isActive ? '-rotate-45 -translate-y-[2.4px]' : ''} duration-300`}></span>
              </button>
            </div>
          </Magnetic>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isActive && <Sidebar />}
      </AnimatePresence>
    </>
  )
}