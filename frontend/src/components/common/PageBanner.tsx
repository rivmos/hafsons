import Image from 'next/image'
import React from 'react'

const PageBanner = ({title, imgSrc} : {title:string, imgSrc: string}) => {
    return (
        <div className="relative">
            <img src={imgSrc} alt="Page Banner Background Image" className="w-full h-full object-cover bg-no-repeat opacity-90 z-10" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl z-10">
                <h1 className="text-[98px] font-bold text-white mb-4">{title}</h1>
            </div>
            <div className='w-full h-full bg-gradient-to-t from-[#33465C] to-transparent absolute top-0'></div>
            <div className='w-full h-full bg-black opacity-40 top-0 absolute'></div>
        </div>
    )
}

export default PageBanner