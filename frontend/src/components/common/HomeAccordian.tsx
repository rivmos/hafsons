import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const HomeAccordian = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='border-borderColor border-[1px] rounded-md p-8'>
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className='flex items-center z-10'>
                            <img src='/img/icons/about_tick.svg' alt='Tick Icon' />
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-textDark">
                                <span className='text-lg'>{title}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-textDark`}
                                />
                            </Disclosure.Button>
                        </div>
                        <Transition
                             enter="transition ease-in-out duration-500 transform"
                             enterFrom="-translate-y-full opacity-0"
                             enterTo="translate-y-0 opacity-100"
                             leave="transition ease-in-out duration-500 transform"
                             leaveFrom="translate-y-0 opacity-100"
                             leaveTo="-translate-y-full opacity-0"
                        >
                            <Disclosure.Panel className="pt-4 pb-2 text-sm text-textGrey">
                                {description}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default HomeAccordian