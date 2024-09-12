'use client'
import Trasntion from '../../components/transition'
import Locomotive from '../../components/locomotive'
import Magnetic from '../../components/magnetic'
import Projects from '../../components/projects'
import Heading from '../../components/heading'
import { projects } from '@/utils/data'

function page({ len }) {

  return (
    <>
      {/* <Trasntion/> */}
      <Heading>Work</Heading>
      <section>
        <div className="container">
          <div className='text-3xl capitalize'>
            <div className='flex items-center gap-2 md:gap-4 flex-wrap'>
              <Magnetic>
                <button className='grow sm:grow-0 rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  all
                </button>
              </Magnetic>
              <Magnetic>
                <button className='grow sm:grow-0 rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  design
                </button>
              </Magnetic>
              <Magnetic>
                <button className='grow sm:grow-0 rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  development - {len | 0}
                </button>
              </Magnetic>
            </div>
          </div>
          <div className='mt-28'>
            <Projects data={projects} h={'90vh'} />
          </div>
        </div>
      </section>


    </>
  )
}

export default page