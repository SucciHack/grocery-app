import React from 'react'
import Sidebar from './Sidebar'
import Productcard from './Productcard'
import { fetchProducts } from '@/Action/Products'

export default async function Productscontainer() {
    const products = await fetchProducts()
  return (
    <div className='bg-white w-[98%] mx-auto rounded-lg overflow-hidden flex gap-2 h-[600px]'>
      <div><Sidebar/></div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 overflow-scroll scrollbar-hide gap-2 w-[80%] items-end'>
        {
          products?.map((product)=>{
            return <Productcard key={product.id} product={product}/>
          })

        }
      </div>
    </div>
  )
}
