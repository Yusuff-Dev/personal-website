import Magnetic from '../../magnetic'
import Link from 'next/link';
import Projects from '../../projects'
import { projects } from '@/utils/data'; 

function index() {

    return (
        <section id='projects' className='py-[100px] relative'>
            <div className='container flex flex-col items-center gap-5 md:gap-10 relative'>
                <Magnetic>
                    <p className='text-white-smoke text-5xl font-humane uppercase mr-auto'>— selected projects</p>
                </Magnetic>
                <div className='w-full'>
                    <Projects data={projects} h={'90vh'}/>
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