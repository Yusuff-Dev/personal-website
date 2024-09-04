import Transition from '../../components/transition'
import Hero from './hero'
import Skills from './skills'
import Timeline from './timeline'

function page() {
  return (
    <>
      <Transition />
      <Hero/>
      <Skills/>
      <Timeline/>
    </>
  )
}

export default page