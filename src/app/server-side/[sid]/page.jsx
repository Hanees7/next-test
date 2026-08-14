import { getProdDetail } from '@/app/apiServices/api'
import React from 'react'
// import ProductDetailData from '../../product-list/productDetailData'
import ProductDetailData from '@/app/product-list/ProductDetailData'


export const metadata = {};


const Prodd = async ({ params }) => {
    const { sid } = await params

    console.log("SID", sid)

    const data = await getProdDetail(sid)

    console.log("getProdDetail", data)
    metadata.title = data.title

    return (
        <>
            <h1>Product Details</h1>

            <div>
                <ProductDetailData data={data} />
            </div>
        </>
    )
}

export default Prodd