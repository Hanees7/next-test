import Link from 'next/link'
import React from 'react'
import { products } from '../../data/products'

const ProductCard = ({ product = products[1] }) => {
    return (
            <>
                        <figure className='bg-white rounded-lg shadow-md p-4'>
                                        <img src={product.image} alt={product.title} />
                                                        <h3 className='text-2xl py-3'>{product.title}</h3>
                                                                        <p>{product.summary}</p>
                                                                                        <Link
                                                                                                            href={`/server-side/${product.id}`}
                                                                                                                                className='mt-4 inline-block bg-amber-400 text-white px-4 py-2 rounded'
                                                                                                                                                >
                                                                                                                                                                    Read More
                                                                                                                                                                                    </Link>
                                                                                                                                                                                                </figure>
                                                                                                                                                                                                        </>
                                                                                                                                                                                                            )
                                                                                                                                                                                                            }

                                                                                                                                                                                                            export default ProductCard
                                                                                                                                                                                                            