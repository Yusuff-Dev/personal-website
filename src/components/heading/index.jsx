import {motion} from 'framer-motion'
import {animating} from '../../utils/framer';
export default function index({children}) {
  return (
    <motion.h2 {...animating(0, -100, 1, 0, 0.8, 0, 1)} className='heading font-humane uppercase text-center mt-24'>{children}</motion.h2>
  )
}