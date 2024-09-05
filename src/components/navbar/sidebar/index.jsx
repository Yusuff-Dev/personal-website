import { motion } from 'framer-motion';
import Curve from './Curve'
import Link from './Link'
import { menuSlide } from '../anime';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
]

export default function index() {
  return (
    <div className={`flex justify-end overflow-hidden fixed top-0 right-0 z-40 h-screen w-full`}>
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`bg-grey h-full w-full sm:w-1/2 lg:w-1/3`}>
        <div className='flex flex-col gap-8 w-full h-full justify-center items-center sm:items-start p-10'>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} isActive ></Link>
            })
          }
        </div>
        <Curve />
      </motion.div>
    </div>
  )
}
