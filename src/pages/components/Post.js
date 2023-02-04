import NextImage from 'next/image'
import { IconBookmark } from '@tabler/icons-react';

import img from '../../../assets/img/dog1.jpg';


export default function Post() {

    return ( 

        <div className="flex flex-row gap-4 p-4 font-OpenSans">
            <NextImage src={img} width={200} height = {100} className="rounded-md"></NextImage>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex px-2 py-1 bg-red-300 rounded-md">
                                <p>Illness</p>
                            </div>
                            <div className="flex px-2 py-1 bg-red-300 rounded-md">
                                <p>Illness</p>
                            </div>
                            <div className="flex px-2 py-1 bg-red-300 rounded-md">
                                <p>Illness</p>
                            </div>
                        </div>
                        <h1>Dog Needs </h1>
                    </div>
                    <IconBookmark className="mt-2 mr-2"/>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row">
                        <div className="flex px-2 py-1 bg-gray-100 border-2 border-gray-200 rounded-md">
                            <p>Review by 2/6/2020</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p>Dr. Brandon Li</p>
                        <div className="flex px-2 py-1 bg-purple-300 rounded-md">
                            <p>Orthodontist</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row justify-between">
                    <p> uploaded 10 min ago</p>
                </div>
            </div>
        </div>
        
    )
}