import React from 'react'
import UnderlinedHeading from './UnderlinedHeading'
import ArrowLink from './ArrowLink'

const ContentSide = ({heading, subHeading, buttonText, className} : {heading:string, subHeading:string, buttonText:string, className:string}) => {
    return (
        <div className={className}>
            <UnderlinedHeading text={heading} isCenter={false}/>
            <p className='text-2xl text-textDark'>
                {subHeading}
            </p>
            <ArrowLink text={buttonText}/>
        </div>
    )
}

export default ContentSide