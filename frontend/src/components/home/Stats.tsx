import Image from 'next/image'
import React from 'react'

const StatCard = ({ iconSrc, title, stat }: { iconSrc: string, title: string, stat: string }) => {
    return (
        <div className="p-8 bg-white rounded-lg shadow-xl text-center w-80">
            <div className="flex justify-center items-center mb-4 h-16">
                <img src={iconSrc} alt={`${title} Icon`}/>
            </div>

            <div className="text-4xl font-bold mb-2">{stat}</div>

            <hr className="border-t border-gray-300 mx-auto w-16 mb-2" />

            <div className="text-xl font-medium">{title}</div>
        </div>
    )
}

const Stats = () => {
    return (
        <div className=' bg-greySection py-12'>
            <div className='container mx-auto flex justify-around'>
            <StatCard  stat='10.5k' title='Premium Property' iconSrc='/img/icons/stats_crown.svg'/>
            <StatCard  stat='8600+' title='Happy Customers' iconSrc='/img/icons/stats_smiley.svg'/>
            <StatCard  stat='1200' title='Award Winning' iconSrc='/img/icons/stats_trophy.svg'/>
            <StatCard  stat='75' title='Years Experience' iconSrc='/img/icons/stats_home.svg'/>
            </div>
        </div>
    )
}

export default Stats