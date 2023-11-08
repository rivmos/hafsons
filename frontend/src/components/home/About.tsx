"use client"
import Image from 'next/image';
import HomeAccordian from '../common/HomeAccordian';

const About = () => {
    return (
        <div className="bg-white container mx-auto py-52">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-16 -mt-24"><span className='text-primaryColor'>About</span> Us</h1>

            {/* Images and Content */}
            <div className="flex justify-around">
                {/* Images */}
                <div className='w-1/2 relative'>
                    <img src="/img/home_about_img.png" alt="Buisnessmen Meeting Image" className='absolute z-10' />
                    <img src="/img/home_about_img_border.svg" alt="Image Border" className='absolute left-12 -top-4' />
                </div>

                {/* Accordians */}
                <div className="w-1/2 px-4 pt-16 flex flex-col gap-8">
                    <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl font-bold'>What the business is about</h2>
                    <h4 className='text-xl text-textGrey'>We offer the very best services in our field. We never settle for second best and always have your satisfaction as our top priority. It’s who we are and we are proud of it.</h4>
                    </div>
                    <div className="mx-auto w-full rounded-2xl bg-white flex flex-col gap-8">
                        <HomeAccordian title='Who We Are' description='We love what we do and it shows. With more than 25 years of experience in the field, we know our industry like the back of our hands. There’s no challenge too big or too small and we dedicate our utmost energy to every project we take on.'/>
                        <HomeAccordian title='Strategies & Plans' description='Every customer is unique. That’s why we customise every one of our plans to fit your needs exactly. Whether it’s a small strategy or a comprehensive effort, we’ll sit down with you, listen to your requests and prepare a customised plan.'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
