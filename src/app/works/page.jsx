'use client'
import Trasntion from '../../components/transition'
import Locomotive from '../../components/locomotive'
import Magnetic from '../../components/magnetic'
import Projects from '../../components/projects'
import Link from 'next/link'

function page({ len }) {

  return (
    <>
      {/* <Trasntion/> */}
      <section id="work">
        <Locomotive dur={0.02}>work work work work work</Locomotive>
      </section>

      <section>
        <div className="container">
          <div className='text-3xl capitalize'>
            <div className='flex items-center gap-2 md:gap-4'>
              <Magnetic>
                <button className='rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  all
                </button>
              </Magnetic>
              <Magnetic>
                <button className='rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  design
                </button>
              </Magnetic>
              <Magnetic>
                <button className='rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                  development - {len | 0}
                </button>
              </Magnetic>
            </div>
          </div>
          <div className='mt-28'>
            <Projects data={[1, 2, 3]}>
              <div className='flex items-center justify-between flex-wrap bg-blue-50 h-screen w-full'>

              </div>
            </Projects>
          </div>
        </div>
      </section>


    </>
  )
}

export default page