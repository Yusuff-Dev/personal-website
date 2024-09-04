'use client'
import Magnetic from '../../../components/magnetic'

function index() {
    const skills = ["html", 'css', 'javascript', 'react', 'next', 'figma', 'tailwindcss', 'git', ]
    return (
        <section className='py-10 sm:py-20 md:py-[100px]'>
            <div className="container">
                <div>
                    <p className='text-[calc(5rem+5vw)] text-white-smoke font-humane uppercase'>— Skills</p>
                    <div className='flex items-center justify-center gap-5 flex-wrap max-w-screen-md mx-auto'>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <Magnetic key={index}>
                                        <button className='!grow sm:!grow-0 border px-7 py-2 border-white-smoke text-white-smoke rounded-full uppercase'>{skill}</button>
                                    </Magnetic>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index