
import Buttonscroll from '@/components/Buttonscroll'
import Corousel from '@/components/Corousel'
import Navbar from '@/components/Navbar'
import Productscontainer from '@/components/Productscontainer'
import React from 'react'

export default async function page() {
  return (
    <div>
      <Navbar/>
      <Corousel/>
      <Buttonscroll/>
      <Productscontainer/>
    </div>
  )
}
