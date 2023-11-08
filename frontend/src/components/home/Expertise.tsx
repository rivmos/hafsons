import React from 'react';
import ContentSide from '../common/ContentSide';
import Image from 'next/image';

function Expertise() {
  return (
    <div className="py-12 container mx-auto">
      <h1 className="text-[90px] text-center text-textDark mb-6">The experts in local and international property</h1>

      <div className="">
        {/* We're Experts Section */}
        <div className='flex justify-between items-center'>
          <ContentSide className='w-1/2 px-8 space-y-6' heading="We're Experts" subHeading='Information and communication are vital strengths in these unprecedented times. Our experts provide up-to-date market insight and analysis across all property markets via our insight & opinion hub.' buttonText='EXPLORE OUR LATEST RESEARCH' />
          <img src="/img/expertise_top.png" alt="Expertise" className='border-l-[20px] border-primaryColor w-1/2'/>
        </div>

        {/* We Value Relationships Section */}
        <div className='flex justify-between items-center'>
          <img src="/img/expertise_bottom.png" alt="Expertise" className='border-r-[20px] border-primaryColor w-1/2'/>
          <ContentSide className='w-1/2 px-8 space-y-6' heading="We Value Relationships" subHeading='Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.' buttonText='LEARN MORE ABOUT SAVILLS' />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
