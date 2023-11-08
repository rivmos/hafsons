import React from 'react'
import ArrowLink from '@/components/common/ArrowLink'
import PageBanner from '@/components/common/PageBanner'
import PropertyCard from '@/components/common/PropertyCard'
import Image from 'next/image'

const propertyData = [
    {
        id: 1,
        name: 'The Stables',
        price: 9540.99,
        address: 'Terry Lane, Golden CO 80403',
        image: '/img/sales/p1.png',
    },
    {
        id: 1,
        name: 'The Old Rectory',
        price: 5999.99,
        address: 'Yule Street, Arvada CO 80007',
        image: '/img/sales/p2.png',
    },
    {
        id: 1,
        name: 'Holly Cottage',
        price: 6489.99,
        address: 'Alice Court, Annapolis MD 21401',
        image: '/img/sales/p3.png',
    },
    {
        id: 1,
        name: 'Meadow View',
        price: 9540.99,
        address: 'Doane Street, Fremont CA 94538',
        image: '/img/sales/p4.png',
    },
    {
        id: 1,
        name: 'Greenacres',
        price: 1025.99,
        address: 'Terry Lane, Golden CO 80403',
        image: '/img/sales/p5.png',
    },
    {
        id: 1,
        name: 'White Cottage',
        price: 9540.99,
        address: 'Doane Street, Fremont CA 94538',
        image: '/img/sales/p6.png',
    },
]

const Lettings = () => {
    return (
        <div>
            <PageBanner title='Lettings' imgSrc='/img/page_banner_sales.png' />

            <div className='container mx-auto text-textDark space-y-20 pt-20'>
                <div className='grid grid-cols-3'>
                    <div className='flex items-center col-span-2'>
                        <h4 className='text-5xl font-thin'>We know that there’s much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors.</h4>
                    </div>
                    <div className='border-[1px] px-8 py-12'>
                        <h4 className='font-semibold text-4xl mb-6'>Experts in Residential Lettings</h4>
                        <div className='flex gap-4'>
                            <img src='/img/team/team_jake.png' alt="Team Member" className='w-44' />
                            <div className='text-2xl space-y-3'>
                                <h5>Head of Lettings</h5>
                                <h5>One Church Road</h5>
                                <h5 className=' font-bold'>+44 (0) 123 1234 123</h5>
                                <ArrowLink text={'Contact Now'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='w-1 h-20 inline-block bg-primaryColor'></span>
                    <h3 className='text-4xl max-w-4xl font-semibold'>A one-stop shop of honest and insightful lettings advice, guidance and services for landlords</h3>
                </div>
                <div className='text-2xl text-textGrey font-light'>
                    <p>This includes how to best present your property for a successful let; marketing your property locally, nationally and internationally to our wide database of applicants; negotiating between you and your applicant to get the right tenancy terms; creating a robust tenancy agreement to suit all parties; and keeping you informed with legislative requirements including health and safety and the relevant consents and conditions for letting your property.</p>
                    <p className='mt-4'>We have different levels of service so you can choose what’s best for you. You can either manage your property yourself, or we can look after it throughout your journey as a landlord and take responsibility for its management. Whichever you choose, our teams will guide you every step of your journey with us.</p>
                </div>
            </div>

            <div className='container mx-auto py-16'>
                <div className='flex justify-between items-center mb-16'>
                    <h2 className='text-4xl text-primaryColor font-semibold'>Recently let properties</h2>
                    <button className='px-16 py-4 border-primaryColor border-[1px]'>View All Properties</button>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {propertyData.map(property => <PropertyCard key={property.id} propertyName={property.name} propertyPrice={property.price} propertyImage={property.image} propertyAddress={property.address} />)}
                </div>
            </div>
        </div>
    )
}

export default Lettings