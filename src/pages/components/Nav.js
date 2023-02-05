import NextImg from 'next/image'
import { IconPlus } from '@tabler/icons-react';
import { IconMessages } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
} from '@tabler/icons';

import { useRouter } from 'next/router';

export default function Nav(){

    const router = useRouter();
    const pathname = router.pathname;

    return (
       
        <>
            <div className="flex flex-row justify-between px-12 py-4">
                <a href='/' className="flex flex-row justify-center items-center">
                    <NextImg src='/assets/vetlink.svg'  width={125} height={125}/>    
                </a>
                <div className="flex flex-row items-center justify-center gap-6 mt-2">
                    
                    
                    {pathname != '/CreatePost' && <a href="./CreatePost" className="flex flex-row items-center justify-center gap-2 px-2 py-2 font-bold hover:bg-rose-400 bg-rose-600 text-white rounded-lg">
                        <IconPlus />
                        <p>Create Post</p>
                    </a>}

                    <a className = "flex flex-row justify-center gap-2 p-2 bg-gray-100 rounded-full h-min hover:bg-gray-300">
                        <IconMessages/>
                    </a>

                    <a className="flex items-center justify-center p-2 bg-gray-100 rounded-full h-min hover:bg-gray-300"> 
                        <IconBellRinging/>
                    </a>

                </div>

            </div>
        </>

    )
}