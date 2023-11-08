import Image from 'next/image'
import React from 'react'

const Market = () => {
    return (
        <div className='relative bg-marketImage bg-no-repeat bg-cover'>
            <div className='w-full bg-primaryColor h-full absolute z-10 opacity-90'></div>
            <div className='container mx-auto flex flex-col gap-2 items-center py-40 text-white relative z-20'>
                <h1 className='text-[80px] font-bold'>Market your property with us</h1>
                <p className='text-2xl text-center leading-10'>Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.</p>
                <button className='bg-white text-black text-3xl flex items-center gap-4 mt-4 px-8 py-3 shadow-xl rounded-md'>Learn More<img src='/img/icons/link_right_arrow.svg' alt="Link Arrow Icon" /></button>
            </div>
        </div>
    )
}

export default Market