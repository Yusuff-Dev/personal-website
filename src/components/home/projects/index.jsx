import React, { useEffect, useRef } from 'react'
import Card from '../../card';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

function index() {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const projects = [
        {
            title: "Matthias Leidinger",
            description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
            src: 'tree.jpg',
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            color: "#BBACAF"
        },

        {
            title: "Clément Chapillon",
            description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
            src: 'tree.jpg',
            link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
            color: "#977F6D"
        },

        {
            title: "Zissou",
            description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
            src: 'tree.jpg',
            link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
            color: "#C2491D"
        },

        {
            title: "Zissou",
            description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
            src: 'tree.jpg',
            link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
            color: "#C248af"
        },
    ];


    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    return (
        <section id='projects' data-text="02" className='py-[100px]' ref={container}>
            <div className='container'>
                <h2 className='text-zinc-500 text-7xl font-medium text-center uppercase'>Recent works</h2>
                <div  className={`main`}>
                    {
                        projects.map((project, i) => {
                            let targetScale = 1 - ((projects.length - i) * 0.05);
                            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                        })
                    }
                </div>
            </div>
            <p>all projects</p>
        </section>
    )
}

export default index