import ContentSide from '@/components/common/ContentSide'
import PageBanner from '@/components/common/PageBanner'
import UnderlinedHeading from '@/components/common/UnderlinedHeading'
import YBSection from '@/components/common/YBSection'
import React from 'react'

const About = () => {
    return (
        <div>
            <PageBanner title="About Us" imgSrc='/img/page_banner_about.png' />

            <div className='py-16'>
                <div className='container mx-auto'>
                    <YBSection heading='Excellence in Every Home,
                        Every Transaction' subHeading='Welcome to Hafsons, your dependable partner in the complex world of property investments and advisory services. With a profound commitment to excellence, unwavering integrity, and a relentless focus on delivering the best outcomes for our clients, we have earned our reputation as a premier property advisory firm.' />
                </div>

                <div className="container mx-auto py-60 bg-aboutImage bg-no-repeat bg-right">
                    <div className="bg-[#21354E]/[0.9] rounded-md p-20 w-[900px] text-textDark shadow-lg">
                        <UnderlinedHeading text="Our Story" isCenter={false} />
                        <p className='text-2xl text-white'>
                            Our mission is simple but pivotal: to make property transactions as smooth, transparent, and rewarding as possible for our clients. We accomplish this by adhering to our core values, which include integrity, excellence, professionalism, and a deep-seated commitment to serving the best interests of our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About