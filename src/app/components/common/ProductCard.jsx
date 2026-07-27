import React from 'react'

const ProductCard = () => {
    return (
        <>
            <figure className='bg-white rounded-lg shadow-md p-4'>
                <img src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-group/aces" alt="img" />
                <h3 className='text-2xl py-3'>Product 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae similique, cumque quos optio culpa cupiditate labore molestiae eveniet eum officia perspiciatis atque quas facere ratione inventore laborum, incidunt dolore.</p>
                <button className='bg-amber-400 text-white px-4 py-2 rounded'>Read More</button>
            </figure>
        </>
    )
}

export default ProductCard