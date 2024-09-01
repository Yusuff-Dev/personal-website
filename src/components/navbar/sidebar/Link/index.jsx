import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale, slide } from '../../anime';
import { usePathname } from 'next/navigation';
import TextAnimation from '../../../textAnimation'

export default function Index({ data, isActive }) {
  const pathname = usePathname()

  const { title, href, index } = data;

  return (
    <motion.div custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"}></motion.div>
      <Link href={href} className={`block text-white text-6xl px-5 ${pathname === href && 'linkActive'}`}>
      <TextAnimation>{title}</TextAnimation>
      </Link>
    </motion.div>
  )
}