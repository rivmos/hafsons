'use client'
import React, { useState } from 'react'
import ContactForm from '../common/ContactForm'

const Contact = () => {
    return (
        <div className='bg-greySection'>
            <div className='container mx-auto py-32'>
                <div className='w-1/2 space-y-4 mb-4'>
                    <h2 className='text-5xl font-bold text-textDark'>Get in touch</h2>
                    <p className='text-xl text-textGrey'>Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible.</p>
                </div>
                <div className="bg-contactImage bg-no-repeat bg-left flex justify-end">
                        <ContactForm className='px-24 py-44 bg-white rounded-l-[15%] w-[700px] shadow-md space-y-6'/>
                </div>
            </div>
        </div>
    )
}

export default Contact