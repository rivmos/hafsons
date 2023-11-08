import ContactForm from '@/components/common/ContactForm'
import PageBanner from '@/components/common/PageBanner'
import UnderlinedHeading from '@/components/common/UnderlinedHeading'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <PageBanner title='Contact Us' imgSrc='/img/page_banner_contact_us.png' />
      <div className='py-20 bg-greySection'>
        <UnderlinedHeading text="We&apos;re here to help" isCenter={true} />
        <p className='text-center text-textGrey mt-4'>Looking for expert advice or client support? Here&apos;s how you can get in touch with us.</p>
        <div className='container mx-auto mt-16'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-4'>
              <h3 className='text-4xl font-semibold text-textDark'>Contact Details</h3>
              <a className='flex gap-2 items-center' href='phone:02086799353'><img src='/img/icons/footer_call.svg' alt='Call Icon' className='w-6'/>02086799353</a>
              <a className='flex gap-2 items-center' href='mailto:info@hafsons.co.uk'><img src='/img/icons/footer_email.svg' alt='Email Icon' className='w-6'/>info@hafsons.co.uk</a>
              <h3 className='text-4xl font-semibold text-textDark'>Get Directions</h3>
              <address className='flex gap-2 items-center'><img src='/img/icons/footer_address.svg' alt='Address Icon' className='w-6'/>656 Streatham High Road, London, SW16 3QL</address>
            </div>
            <div>
              <ContactForm className='px-24 py-32 bg-white rounded-l-[15%] w-[700px] shadow-md space-y-6'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact