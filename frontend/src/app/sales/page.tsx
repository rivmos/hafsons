import React from 'react'
import ArrowLink from '@/components/common/ArrowLink'
import ContentSide from '@/components/common/ContentSide'
import PageBanner from '@/components/common/PageBanner'
import UnderlinedHeading from '@/components/common/UnderlinedHeading'
import YBSection from '@/components/common/YBSection'
import PropertyCard from '@/components/common/PropertyCard'

const propertyData = [
  {
    id:1,
    name:'The Stables',
    price:9540.99,
    address: 'Terry Lane, Golden CO 80403',
    image: '/img/sales/p1.png',
  },
  {
    id:1,
    name:'The Old Rectory',
    price:5999.99,
    address: 'Yule Street, Arvada CO 80007',
    image: '/img/sales/p2.png',
  },
  {
    id:1,
    name:'Holly Cottage',
    price:6489.99,
    address: 'Alice Court, Annapolis MD 21401',
    image: '/img/sales/p3.png',
  },
  {
    id:1,
    name:'Meadow View',
    price:9540.99,
    address: 'Doane Street, Fremont CA 94538',
    image: '/img/sales/p4.png',
  },
  {
    id:1,
    name:'Greenacres',
    price:1025.99,
    address: 'Terry Lane, Golden CO 80403',
    image: '/img/sales/p5.png',
  },
  {
    id:1,
    name:'White Cottage',
    price:9540.99,
    address: 'Doane Street, Fremont CA 94538',
    image: '/img/sales/p6.png',
  },
]

const Sales = () => {
  return (
    <div>
      <PageBanner title='Sales' imgSrc='/img/page_banner_sales.png' />
      <div className="container mx-auto py-16">
        <YBSection heading={'Buying or Selling'} subHeading={'We know that there’s much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors.'} />
      </div>

      <div className='bg-greySection'>
        <div className="container mx-auto py-80 bg-salesImage bg-no-repeat bg-right">
          <div className="bg-white rounded-tr-[10%] p-20 w-[650px] text-textDark shadow-lg">
          <div className='space-y-4'>
            <UnderlinedHeading text="Experts in Residential Valuation " isCenter={false}/>
            <p className='text-2xl text-textDark'>
            Our dedicated residential valuation team of over 50 registered valuers, with local specialism covering all major centres across the UK.
            </p>
            <ArrowLink text="Click Here"/>
        </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-16'>
        <div className='flex justify-between items-center mb-16'>
          <h2 className='text-4xl text-primaryColor font-semibold'>Property for sale</h2>
          <button className='px-16 py-4 border-primaryColor border-[1px]'>View All Properties</button>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {propertyData.map(property => <PropertyCard key={property.id} propertyName={property.name} propertyPrice={property.price} propertyImage={property.image} propertyAddress={property.address} />)}
        </div>
      </div>
    </div>
  )
}

export default Sales