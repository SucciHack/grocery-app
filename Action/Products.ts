"use server"

import { product } from "@/Types/Types"

const API = 'https://inventory-app-ten-gilt.vercel.app/api/v1/products'
export async function fetchProducts(){
    try {
        const response = await fetch(API)
        const productsData = await response.json()
        return productsData.data as product[]
    } catch (error) {
        console.log(error)
    }

}