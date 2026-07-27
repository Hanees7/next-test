import React from 'react'
import ProductCard from '../common/ProductCard'

const LatestProduct = () => {
    return (
        <>
            <section className='bg-lime-100 py-10 '>
                <h1 className='text-2xl font-bold text-center'>Latest Product</h1>
                <div className='mx-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                    <ProductCard />
                </div>
            </section>
        </>
    )
}

export default LatestProduct