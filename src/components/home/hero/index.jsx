'use client'
import { useEffect, useState } from 'react'
import Magnetic from '../../../components/magnetic'
import Locomotive from '../../locomotive'
import { supabase } from '@/config/supabase';

function index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getSlugs = async () => {
            const { data, error } = await supabase.from('title').select('*');
            if (error) {
                console.log(error.message);
                return;
            }

            if (data) {
                setData(data)
            }
        }

        getSlugs();
    }, []);

    return (
        <section id='#hero' className='h-screen'>
            <Locomotive dur={0.02}>front-end developer front-end developer</Locomotive>
            <div className='flex flex-col items-center gap-10 absolute bottom-10 md:bottom-5 container'>
                <p className='max-w-sm text-center uppercase'>
                    {data?.at(0)?.title || "Hey there , I'm Yusuf, a front-end developer with a passion for transforming ideas into captivating visual experiences."}
                </p>
                <div className='flex items-center justify-between w-full'>
                    <Magnetic><p className='uppercase text-[0.75rem]'>available for work</p></Magnetic>
                    <Magnetic><p className='uppercase text-[0.75rem]'>portfolio 2024</p></Magnetic>
                </div>
            </div>
        </section>
    )
}

export default index

// —