import { product } from '@/Types/Types';
import Image from 'next/image';
import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function Productcard({product}:{product:product}) {
  return (
    <div>
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F1F3F6] overflow-hidden">
        <div className="flex flex-col items-center">
            <Image className="w-[100%] block" src={product.productThumbnail} alt={product.name} width={300} height={300}/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">{product.name}</h5>
                <div className="flex justify-between gap-12 dark:text-gray-900">
                    <h2>{product.productPrice}</h2>
                    <div className="flex items-center gap-1 text-lg">
                        <CiCircleMinus/>
                        <p>0</p>
                        <CiCirclePlus/>
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
