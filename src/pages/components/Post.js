import NextImage from 'next/image'
import { IconBookmark } from '@tabler/icons-react';

import Tag from './Tag'

import img from '../../../assets/img/dog1.jpg';


export default function Post() {

    return ( 
        <div className= "flex justify-center">
            <div className="flex flex-row justify-center w- gap-2 p-4 font-OpenSans hover:bg-gray-100 rounded-2xl">
                <NextImage src={img} width={300} height = {300} className="shadow-lg rounded-2xl"></NextImage>
                <div className="flex flex-col w-full gap-2 p-2">
                    <div className="flex flex-row justify-between gap-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-2 text-xs font-bold">
                                <Tag tagname="Orthodontist" color="blue"/>
                                <Tag tagname="Orthodontist" color="blue"/>
                                <Tag tagname="Orthodontist" color="blue"/>
                            </div>
                            <h1 className="text-2xl font-bold">Dog Needs </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row">
                            <div className="flex px-2 py-1 bg-gray-100 rounded-md">
                                <p className="text-sm font-bold text-gray-600">Review by 2/6/2020</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-2">
                            <p className="font-semibold">Dr. Brandon Li</p>
                            <div className="flex px-2 py-1 text-purple-600 bg-purple-200 rounded-md w-min">
                                <p className="text-xs font-bold">Orthodontist</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row items-end justify-between mt-2">
                        <p className="text-base font-semibold text-gray-700"> Posted 10 min ago</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between w-3/4 py-1">
                    <div className="flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-300">
                        <IconBookmark/>
                    </div>
                    <div className="px-2 py-1 bg-gray-100 rounded-lg">
                        <p className="font-bold">$20 Flat Fee</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}