import { useEffect, useState } from "react";
import Link from "next/link";
import TextAnimation from '../../textAnimation'
import { FaGithub, FaProjectDiagram, FaCodepen } from "react-icons/fa";

function github() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        const res = await fetch('https://api.github.com/users/yusuff-dev');
        const data = await res.json();
        setUser(data);
        getRepos()
        setLoading(false);

    }

    const getRepos = async () => {
        const res = await fetch('https://api.github.com/users/Yusuff-Dev/repos');
        const data = await res.json();
        setRepos(data)
    }

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <p className="capitalize text-zinc-300 text-lg">loading...</p>
    }

    return (
        <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="hidden sm:block w-[130px] sm:w-[200px] md:w-[250px]">
                <img src={user?.avatar_url} alt={user?.name} className="rounded-xl w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-[160px] gap-2 sm:gap-2 w-full md:w-auto">
                <Link href={user?.html_url} scroll={false} target='blanc' className='group rounded-full border px-3 sm:px-5 text-zinc-300 p-2 flex items-center justify-center gap-1'>
                    <FaGithub size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                    <TextAnimation>Github</TextAnimation>
                </Link>

                <Link href={user?.html_url} scroll={false} target='blanc' className='group rounded-full border px-3 sm:px-5 text-zinc-300 p-2 flex items-center justify-center gap-1'>
                    <FaCodepen size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                    <TextAnimation>Respos: {user?.public_repos}</TextAnimation>
                </Link>

                <Link href={user?.html_url} scroll={false} target='blanc' className='group rounded-full border px-3 sm:px-5 text-zinc-300 p-2 flex items-center justify-center gap-1'>
                    <FaProjectDiagram size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                    <TextAnimation>Hirable: {user?.hirable ? 'Yes' : 'No'}</TextAnimation>
                </Link>
                <Link href={user?.html_url} scroll={false} target='blanc' className='group rounded-full border px-3 sm:px-5 text-zinc-300 p-2 flex items-center justify-center gap-1'>
                    <FaProjectDiagram size={25} className='text-zinc-300 group-hover:opacity-40 duration-300' />
                    <TextAnimation>Hirable: {user?.hirable ? 'Yes' : 'No'}</TextAnimation>
                </Link>

            </div>
        </div>
    )
}

export default github