'use client'
import Trasntion from '../../components/transition'
import Magnetic from '../../components/magnetic'
import Projects from '../../components/projects'
import Heading from '../../components/heading'
import { supabase } from '@/config/supabase';
import { useEffect, useState } from 'react'

export default function page({ len }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        console.log(error.message);
        return;
      }
      if (data) setData(data);
    }
    getProjects();
  }, []);

  return (
    <>
      {/* <Trasntion/> */}
      <Heading>Works</Heading>
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
            <Projects data={data} />
          </div>
        </div>
      </section>


    </>
  )
}