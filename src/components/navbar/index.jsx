'use client'
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar'
import Magnetic from '../magnetic'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/navSlice';

export default function Home() {
  const action = useSelector(state=>state.navbar.isActive);
  const dispatch = useDispatch();

  const pathname = usePathname();

  useEffect(() => {
    if (action) dispatch(toggle())
  }, [pathname]);

  const handleToggle = () => dispatch(toggle());

  return (
    <>
      <nav className='fixed top-0 right-0 z-50 py-10'>
        <div className="container flex items-center justify-end">
          <Magnetic>
            <div onClick={handleToggle} className="rounded-full bg-dark-grey px-3 flex items-center h-12 relative select-none cursor-pointer">
              <p className={`text-white-smoke font-inter text-[13px] ${action ? 'opacity-0' : 'opacity-100'} duration-500`}>MENU</p>
              <p className={`text-white-smoke font-inter text-[13px] ${action ? 'opacity-100' : 'opacity-0'} duration-500`}>CLOSE</p>
              <button className={`absolute top-1 rounded-full w-10 h-10 flex flex-col gap-1 items-center justify-center bg-grey ${action ? 'left-1' : 'left-full -translate-x-[calc(100%+4px)]'} duration-700 ease`}>
                <span className={`border border-bg-black block w-4 ${action ? 'rotate-45 translate-y-[3px]' : ''} duration-500`}></span>
                <span className={`border border-bg-black block w-4 ${action ? '-rotate-45 -translate-y-[2.4px]' : ''} duration-500`}></span>
              </button>
            </div>
          </Magnetic>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {action && <Sidebar />}
      </AnimatePresence>
    </>
  )
}