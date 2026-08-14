import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { products } from '../../data/products'
import { devDelay } from '../../utils/devDelay'

const ProductDetails = async ({ params }) => {
  const { pids } = await params
  const product = products.find((item) => item.id === pids)

  if (!product) {
    notFound()
  }

  await devDelay()

  return (
    <main className='bg-slate-50 px-4 py-12'>
      <section className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
        <div
          className='min-h-[320px] rounded-lg bg-cover bg-center shadow-md'
          role='img'
          aria-label={product.title}
          style={{ backgroundImage: `url(${product.image})` }}
        />

        <div className='flex flex-col justify-center'>
          <p className='text-sm font-semibold uppercase tracking-wider text-amber-700'>
            {product.category}
          </p>
          <h1 className='mt-3 text-3xl font-bold text-slate-950 md:text-5xl'>
            {product.title}
          </h1>
          <p className='mt-4 text-lg font-semibold text-amber-700'>
            {product.price}
          </p>
          <p className='mt-5 leading-7 text-slate-600'>
            {product.description}
          </p>

          <ul className='mt-6 space-y-3 text-slate-700'>
            {product?.highlights?.map((highlight) => (
              <li key={highlight} className='flex items-center gap-3'>
                <span className='h-2 w-2 rounded-full bg-amber-600' />
                {highlight}
              </li>
            ))}
          </ul>

          <Link
            href='/product'
            className='mt-8 inline-block w-fit rounded-md bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800'
          >
            Back to Products
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
