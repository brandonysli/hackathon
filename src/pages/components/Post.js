import React, { useState, useEffect } from 'react'
import NextImage from 'next/image'
import { IconBookmark } from '@tabler/icons-react';

import img from '../../../assets/img/dog1.jpg';
import Tag from './Tag';


export default function Post({postProps}) {

    const [data, setData] = useState(postProps);
    console.log(data)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3000/api/post', {
            method: 'get', credentials: 'include'
          });
          const data = await response.json();
          setData(data);
        };
    
        fetchData();
      }, []);

    return ( 

        <div className="flex flex-col gap-2 justify-center items-center my-8">

            {data?.data.map((val, index) => {
                return (
                    <div className="flex flex-row justify-center w-1/2 gap-2 p-4 font-OpenSans hover:bg-gray-100 rounded-2xl">
                    <NextImage src={img} width={300} height = {300} className="shadow-lg rounded-2xl"></NextImage>
                    <div className="flex flex-col w-full gap-2 p-2">
                        <div className="flex flex-row justify-between gap-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center gap-2 text-xs font-bold">
                                    {val?.urgency && <Tag color="red" tagname = "Urgent"/>}
                                    <Tag color={val.pet.color} tagname = {val.pet.name}/>
                                    <Tag color="gray" tagname={val.area}/>
                                </div>
                                <h1 className="text-xl font-extrabold">{val.title}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row">
                                <div className="flex px-2 py-1 bg-gray-100 rounded-md">
                                    <p className="text-sm font-bold text-gray-600">Review by 2/6/2020</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 ml-2">
                                <p className="font-semibold">{`Dr. ${val.reviewingUser.name}`}</p>
                                <Tag color={val.reviewingUser.specialization.color} tagname={val.reviewingUser.specialization.name}/>
                            </div>

                        </div>

                        <div className="flex flex-row items-end justify-between mt-2">
                            <p className="text-base font-semibold text-gray-700"> Posted 10 min ago</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between w-1/2 py-1">
                        <div className="flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-300">
                            <IconBookmark/>
                        </div>
                        <div className="px-2 py-1 bg-gray-100 rounded-lg">
                            <p className="font-bold">$20 Flat Fee</p>
                        </div>
                    </div>
                </div>
                )
                })}

        </div>

        
        
    )
}

Post.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/post', {
        method: 'get', credentials: 'include'
      });
    const data = await response.json();
    return { postProps: data };
  };