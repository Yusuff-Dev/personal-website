import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale, slide } from '../../anime';
import { usePathname } from 'next/navigation';
import Magnetic from '../../../magnetic'

export default function Index({ data, isActive }) {
  const pathname = usePathname()

  const { title, href, index } = data;

  return (
    <motion.div custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"}></motion.div>
      <Magnetic>
        <Link href={href} className={`block text-bg-black text-7xl px-5 before:bg-bg-black ${pathname === href && 'linkActive'}`}>
          {title}
        </Link>
      </Magnetic>
    </motion.div>
  )
}