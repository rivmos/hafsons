import React from 'react'
import ContentSide from '../common/ContentSide'


const Valuation = () => {
    return (
        <div className='bg-greySection'>
            <div className="container mx-auto py-60 bg-valuationImage bg-no-repeat bg-right">
                <div className="bg-white rounded-md p-20 w-[850px] text-textDark shadow-lg">
                    <ContentSide className='space-y-4' heading='Request Your Free Valuation' subHeading='Discover the true value of your assets. Get a complimentary valuation today. Simply fill out the form below, and our experts will provide you with an accurate assessment.' buttonText='Read More' />
                </div>
            </div>
        </div>
    )
}

export default Valuation