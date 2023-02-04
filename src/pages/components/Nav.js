import Logo from '../../../assets/img/vetlink.svg';
import NextImg from 'next/image'
import { IconPlus } from '@tabler/icons-react';
import { IconMessages } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';

export default function Nav(){


    return (
       

        <>
            <div className="flex flex-row justify-between px-8 py-4">
                <NextImg src={Logo}  width={100} height={100}/>


                <div className="flex flex-row items-center justify-center gap-6 mt-2">
                    <a className="flex flex-row items-center justify-center gap-2 px-2 py-2 font-bold text-white rounded-lg bg-rose-600">
                        <IconPlus />
                        <p>Create Post</p>
                    </a>

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