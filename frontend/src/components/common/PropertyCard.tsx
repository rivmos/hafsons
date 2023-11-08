import Image from 'next/image'
import React from 'react'

const PropertyCard = ({propertyName, propertyPrice, propertyImage, propertyAddress} : {propertyName:string, propertyPrice:number, propertyImage:string, propertyAddress:string}) => {
  return (
    <div className='border-gray-100 border-[1px] p-8 rounded-xl hover:cursor-pointer'>
        <img src={propertyImage} alt={`${propertyName} Property Image`} className='rounded-md mb-4'/>
        <h5 className='text-xl font-semibold mb-2'>{propertyName}</h5>
        <h5 className='text-primaryColor text-lg'>${propertyPrice}</h5>
        <address className='flex items-center gap-1 text-lg text-textGrey'><img src='/img/icons/property_location.svg' alt='Location Icon' />{propertyAddress}</address>
    </div>
  )
}

export default PropertyCard