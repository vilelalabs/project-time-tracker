"use client";
import { useRouter } from 'next/navigation';

import { AiOutlineProject, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsPencil, BsCardList } from 'react-icons/bs'
import { BiAlarmAdd, BiLogOutCircle } from 'react-icons/bi'

import { useSession, signOut } from 'next-auth/react';
import useCurrentProject from '@/hooks/useCurrentProject';

const Sidebar = () => {

    const {project} = useCurrentProject();

    const router = useRouter();
    const { data: session } = useSession();

    if (!session) {
        return null;
    }


    const routes = [
        {
            name: 'Home',
            icon: AiOutlineHome,
            href: '/'
        },
        {
            name: 'Manual Register',
            icon: BsPencil,
            href: '/manual-register'
        },
        {
            name: 'Auto Register',
            icon: BiAlarmAdd,
            href: '/auto-register'
        },
        {
            name: 'History',
            icon: BsCardList,
            href: '/history'
        },
    ]

    const onNavigate = (href: string) => {
        router.push(href);
    }

    return (
        <div className="flex flex-col min-h-screen w-auto text-primary bg-bgmenu font-bold px-8 justify-between">
            <div className='space-y-12 flex flex-col py-8 '>
                <h1 className="text-highlight font-semibold text-center">
                    Project Time Tracker
                </h1>
                <div className='flex flex-row items-start'>
                    <AiOutlineProject className="text-highlight mr-2" size={30}/>
                    <h2 className="text-primary text-xl">
                        {project?project?.name:"No Project Selected"}
                    </h2>
                </div>
                {project && <div className="space-y-4">
                    {routes.map((route) => (
                        <div
                            onClick={() => { onNavigate(route.href) }}
                            className="flex items-center text-primary hover:text-highlight cursor-pointer transition"
                            key={route.name}>
                            <route.icon className="text-highlight mr-2" size={25} />
                            {route.name}
                        </div>
                    ))}
                </div>}
            </div>
            <div className="flex flex-col mb-8 gap-4">
                <h2 className="flex items-center text-primary">
                    <AiOutlineUser className="text-highlight mr-2" size={25} />
                    {session?.user?.name}
                </h2>
                <button
                    className="flex items-center text-primary"
                    onClick={() => {
                        signOut()
                        router.push('/login')
                    }}
                >
                    <BiLogOutCircle className="text-highlight mr-2" size={25} />
                    Logout
                </button>
            </div>
        </div>

    );
}

export default Sidebar;