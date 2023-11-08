import PageBanner from '@/components/common/PageBanner'
import UnderlinedHeading from '@/components/common/UnderlinedHeading'
import YBSection from '@/components/common/YBSection'
import Image from 'next/image'
import React from 'react'

const ProfileCard = ({ name, position, imgSrc }: { name: string, position: string, imgSrc: string }) => {
  return (
    <div>
      <img src={imgSrc} alt='Team Member Profile Picture' className='w-96 mb-4' />
      <div className='text-center space-y-1'>
        <h4 className='text-3xl'>{name}</h4>
        <h5 className='text-lg'>{position}</h5>
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <PageBanner title="Our Team" imgSrc='/img/page_banner_team.png' />

      <div className='container mx-auto py-16'>
        <YBSection heading='Meet the Hafsons Team' subHeading='At Hafsons Company, we take great pride in our team of professionals, each of whom plays a crucial role in making our real estate endeavors a success. Our team members bring a wealth of experience and passion to the table, ensuring that every project we undertake is a testament to quality and innovation.' />

        <div className='mt-16 space-y-8'>
          <UnderlinedHeading text='Meet the Team' isCenter={true  } />
          <div className='flex justify-evenly'>
            <ProfileCard name='Luke Remington' position='Managing Director' imgSrc='/img/team/team_luke.png' />
            <ProfileCard name='Emma Campbell' position='Sales Director' imgSrc='/img/team/team_emma.png' />
            <ProfileCard name='Jake Walton' position='Head of Property Management' imgSrc='/img/team/team_jake.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team