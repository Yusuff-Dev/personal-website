import { useEffect, useState } from 'react';
import Magnetic from '../../magnetic'
import Link from 'next/link';
import Projects from '../../projects'
import { supabase } from '@/config/supabase';

function index() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getProjects = async ()=>{
            const {data, error} = await supabase.from('selected_projects').select('*');
            if(error){
                console.log(error.message);
                return;
            }

            if(data){
                setData(data);
            }
        }

        getProjects();
    }, []);

    return (
        <section className='py-[100px] relative'>
            <div className='container flex flex-col items-center gap-5 md:gap-10 relative'>
                <Magnetic>
                    <p className='text-white-smoke text-5xl font-humane uppercase mr-auto'>— selected projects</p>
                </Magnetic>
                <div className='w-full my-10'>
                    <Projects data={data} />
                </div>
                <Magnetic>
                    <Link href="/works" className='rounded-full border border-white-smoke px-7 py-4 text-white-smoke uppercase text-sm'>
                        all projects
                    </Link>
                </Magnetic>
            </div>
        </section>
    )
}

export default index