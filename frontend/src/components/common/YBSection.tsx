import React from 'react'

const YBSection = ({heading, subHeading} : {heading:string, subHeading: string}) => {
    return (
            <div className='text-center space-y-8'>
                <h3 className='text-primaryColor text-6xl max-w-4xl mx-auto'>{heading}</h3>
                <p className='text-textDark text-3xl'>{subHeading}</p>
            </div>
    )
}

export default YBSection