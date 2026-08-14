"use client"
import React, { useState } from 'react'
import ProductCard from '../components/common/ProductCard'

const ProductListt = ({ data }) => {
    const [products, setProducts] = useState(data)
    return (
        <>
            <div className='max-w-[1320px]  mx-auto m-10'>
                <div className='grid grid-cols-4 gap-4'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductListt