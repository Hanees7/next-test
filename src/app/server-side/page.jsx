import React from 'react'
import { getProducts } from '../apiServices/api'
import ProductListt from '../product-list/ProductListt'
export const metadata = {
  title: "Producttt",
  description: "Proddd",
};
const page = async() => {
    const data = await getProducts()
    console.log("okoko",data)
    return (
        <>
            <h1>This is Product Server</h1>
            <ProductListt data={data}/>
        </>
    )
}

export default page