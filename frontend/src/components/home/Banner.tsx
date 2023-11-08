"use client"
import { useState } from "react";
import classNames from "classnames";
import ComboBox from "../common/ComboBox";
import Image from "next/image";

const locationData = [
    { id: 1, name: 'Australia' },
    { id: 2, name: 'United States' },
    { id: 3, name: 'India' },
    { id: 4, name: 'China' },
    { id: 5, name: 'England' },
    { id: 6, name: 'New Zealand' },
]

const propertyData = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const priceData = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const Banner = () => {
    const [location, setLocation] = useState('')
    const [property, setProperty] = useState('')
    const [price, setPrice] = useState('')
    const [ownershipType, setOwnershipType] = useState('Buy')


    return (
        <div className="relative bg-gray-300">
            {/* <img src="/img/banner_bg.png" alt="Background Image" className="w-full h-full object-cover bg-no-repeat opacity-90" /> */}
            <div className="bg-bannerImage bg-cover flex flex-col items-center py-16 sm:py-32 md:py-44 lg:py-80 bg-center">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-[52px] leading-normal md:text-[98px] text-center font-bold text-white mb-4">Find Your Best <br /><span className="text-primaryColor">Property</span></h1>
                    <p className="text-white text-base lg:text-lg text-center mb-6">Nemo enim ipsam voluptatem quia voluptas sit aspernat odit aut fugit, sed quia consequuntur magni dolores qui ratione sequi nesciunt.</p>
                </div>
                <div>
                    <div className="flex justify-start space-x-4 ml-4 lg:ml-8">
                        <button className={classNames("transition-colors duration-300 text-sm lg:text-base px-2 py-1 lg:px-4 lg:py-2 rounded-t", { 'bg-primaryColor text-white': ownershipType === 'Buy' }, { 'bg-white text-textDark': ownershipType !== 'Buy' })} onClick={() => setOwnershipType('Buy')}>Buy</button>
                        <button className={classNames("transition-colors duration-300 text-sm lg:text-base text-textDark px-2 py-1 lg:px-4 lg:py-2 rounded-t", { 'bg-primaryColor text-white': ownershipType === 'Rent' }, { 'bg-white text-textDark': ownershipType !== 'Rent' })} onClick={() => setOwnershipType('Rent')}>Rent</button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center lg:space-x-4 backdrop-blur-sm px-8 py-4 rounded-xl border-white border-[1px]">
                        <ComboBox selected={location} setSelected={setLocation} data={locationData} iconSrc="/img/icons/banner_location.svg" />
                        <ComboBox selected={property} setSelected={setProperty} data={propertyData} iconSrc="/img/icons/banner_property.svg" />
                        <ComboBox selected={price} setSelected={setPrice} data={priceData} iconSrc="/img/icons/banner_currency.svg" />
                        <button className="bg-primaryColor flex items-center gap-2 px-4 py-1 lg:px-8 lg:py-2 rounded text-white group mt-4 md:mt-0"><img className=" transition-all duration-300 group-hover:scale-125" src="/img/icons/banner_search.svg" alt="Search Button Icon" width={20} height={20} />Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
