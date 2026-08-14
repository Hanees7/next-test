'use client'
import React, { useState } from 'react'

const BannerSection = () => {
    const clickButton = () => {
        // alert("Haneesh")
        setModel(!model)
    }
    const [model, setModel] = useState(false);
    return (
        <>
            <div className={`w-[350px] duration-300 fixed ${model ? 'top-[50%]' :"top-[-1000px]"} left-[50%] transform -translate-x-1/2 -translate-y-1/2`}>
                <form className='bg-white p-6 rounded shadow-md'>
                    <div className='mb-4'>
                       <label>
                        FORM
                       </label>

                    </div>
                </form>
            </div>
            <section className='bg-[url("https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-group/aces")] bg-cover bg-center h-screen w-[100%]'>
                <h1 className='text-2xl font-bold text-center text-white'>The Real state company</h1>
                <div className='text-center '>
                    <button onClick={clickButton} className='cursor-pointer bg-amber-800 p-2'>
                        Enquiry Now
                    </button>
                </div>
            </section>

        </>
    )
}

export default BannerSection