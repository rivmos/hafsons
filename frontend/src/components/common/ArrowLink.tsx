import Image from 'next/image'
import React from 'react'

const ArrowLink = ({text}:{text:string}) => {
  return (
    <a className='flex items-center gap-2 text-primaryColor cursor-pointer'>
        <span className='text-xl'>{text}</span> 
        <img alt='Right Arrow Icon' src='/img/icons/link_right_arrow.svg' />
    </a>
  )
}

export default ArrowLink