import React from 'react'
import Sidebar from './Sidebar'
import Productcard from './Productcard'
import { fetchProducts } from '@/Action/Products'

export default async function Productscontainer() {
    const products = await fetchProducts()
  return (
    <div className='bg-white h-[700px] w-[90%] mx-auto rounded-lg overflow-hidden flex gap-2'>
      <Sidebar/>
      <div className='grid grid-cols-4 w-[80%] p-2 overflow-scroll scrollbar-hide gap-2'>
        {
          products?.map((product)=>{
            return <Productcard key={product.id} product={product}/>
          })

        }
      </div>
    </div>
  )
}
