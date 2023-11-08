import classNames from 'classnames'
import React from 'react'

const UnderlinedHeading = ({ text, isCenter }: { text: string, isCenter: Boolean }) => {
    return (
        <div className='flex flex-col gap-2 text-center'>
            <h2 className={classNames('text-5xl font-medium text-textDark', {'text-center': isCenter === true }, {'text-left': isCenter === false })}>{text}</h2>
            <div className={classNames('flex', {'justify-center': isCenter === true }, {'justify-start': isCenter === false })}>
                <span className=' inline-block h-1 w-36 bg-primaryColor'></span>
            </div>
        </div>
    )
}

export default UnderlinedHeading