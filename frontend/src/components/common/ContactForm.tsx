'use client'
import React, { SyntheticEvent, useState } from 'react'

const ContactForm = ({className} : {className : string}) => {

    const [formData, setFormData] = useState({firstName:'', lastName:'', email:'', mobile:'', message:''})
    const onSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={onSubmit} className={className}>
            <h2 className="text-5xl font-bold -ml-2 mb-16 text-textDark">Get in touch</h2>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className='text-textGrey text-sm'>First Name</label>
                    <input onChange={(e) => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full border-0 border-b-[1px] border-gray-300 focus:ring-0 focus:border-b-textDark px-0" />
                </div>

                <div>
                    <label className='text-textGrey text-sm'>Last Name</label>
                    <input onChange={(e) => setFormData({...formData, lastName: e.target.value})}  type="text" className="w-full border-0 border-b-[1px] border-gray-300 focus:ring-0 focus:border-b-textDark px-0" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                <div>
                    <label className='text-textGrey text-sm'>Email</label>
                    <input onChange={(e) => setFormData({...formData, email: e.target.value})}  type="email" className="w-full border-0 border-b-[1px] border-gray-300 focus:ring-0 focus:border-b-textDark px-0" />
                </div>

                <div>
                    <label className='text-textGrey text-sm'>Phone Number</label>
                    <input onChange={(e) => setFormData({...formData, mobile: e.target.value})}  type="tel" className="w-full border-0 border-b-[1px] border-gray-300 focus:ring-0 focus:border-b-textDark px-0" />
                </div>
            </div>

            <div>
                <label className='text-textGrey text-sm'>Message</label>
                <textarea onChange={(e) => setFormData({...formData, message: e.target.value})}  className="w-full border-0 border-b-[1px] border-gray-300 focus:ring-0 focus:border-b-textDark px-0" rows={4}></textarea>
            </div>

            <button className="bg-yellow-500 text-white font-medium py-2 px-6 rounded-xl hover:bg-yellow-600 transition duration-200">Send Message</button>
        </form>
    )
}

export default ContactForm