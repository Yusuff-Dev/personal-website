'use client'
import Transition from '../../components/transition'
import Skills from './skills'
import Timeline from './timeline'
import Heading from '../../components/heading'

function page() {
  return (
    <>
      {/* <Transition /> */}
      <Heading>About me</Heading>
      <Skills />
      <Timeline />
    </>
  )
}

export default page