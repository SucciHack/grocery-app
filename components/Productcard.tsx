import { product } from '@/Types/Types';
import Image from 'next/image';
import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function Productcard({product}:{product:product}) {
  return (
    <div>
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F1F3F6] overflow-hidden w-[100%]">
        <div className="flex flex-col items-center">
            <Image className="w-[100%] block" src={product.productThumbnail} alt={product.name} width={300} height={300}/>
            <div className='h-[50px]'>
                <h5 className="text-sm text-gray-900 dark:text-gray-900 line-clamp-2 px-2 font-bold mb-2">{product.name}</h5>
                </div>
                <div className="flex justify-between gap-12 dark:text-gray-900 items-center">
                    <h2>${product.productPrice}</h2>
                    <div className="flex justify-center items-center gap-1 text-lg ">
                        <button><CiCircleMinus/></button>
                        <p>0</p>
                        <button><CiCirclePlus/></button>
                    </div>
                </div>
            <div className="flex mt-4 md:mt-6">
                <button className="inline-flex items-center px-12 py-2 text-sm font-medium text-center text-black bg-transparent hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-[2px] border-[black] dark:text-[black] dark:hover:bg-blue-700 hover:border-none dark:focus:ring-blue-800">Add friend</button>
            </div>
        </div>
    </div>

    </div>
  )
}
