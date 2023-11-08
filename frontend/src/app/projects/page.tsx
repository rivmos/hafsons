import PageBanner from '@/components/common/PageBanner'
import UnderlinedHeading from '@/components/common/UnderlinedHeading'
import YBSection from '@/components/common/YBSection'
import Image from 'next/image'
import React from 'react'

const imgArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const Projects = () => {
    return (
        <div>
            <PageBanner title='Our Projects' imgSrc='/img/page_banner_our_projects.png' />

            <div className='container mx-auto py-20'>
                <YBSection heading='Welcome to Hafsons Company' subHeading='At Hafsons Company, we believe in transforming dreams into reality. As a leading name in the real estate industry, we take immense pride in our commitment to quality, innovation, and customer satisfaction. Our passion for creating exceptional living spaces and our dedication to excellence drive every project we undertake.' />
                <div className='mt-20'>
                    <UnderlinedHeading text='Gallery' isCenter={true} />
                    <div className='grid grid-cols-3 gap-8 mt-8'>
                        {imgArray.map(imageName => <img key={imageName} alt='Gallery Image' src={`img/gallery/${imageName}.png`} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects