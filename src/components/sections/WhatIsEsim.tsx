import React from 'react';

import Image from 'next/image';

const WhatIsEsim = () => {
    return (
        <section className='bg-gray-50 py-16 lg:py-20'>
            <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-12'>
                    {/* Left Side - Image */}
                    <div className='flex w-full justify-center lg:w-1/2'>
                        <div className='relative w-full max-w-lg'>
                            <Image
                                src='/images/whatisEsim.png'
                                alt='What is eSIM Technology'
                                width={900}
                                height={900}
                                className='h-auto w-full rounded-lg shadow-lg'
                                priority
                            />

                            {/* Optional: Decorative elements */}
                            <div className='absolute -top-4 -right-4 h-20 w-20 rounded-full bg-blue-100 opacity-60'></div>
                            <div className='absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-green-100 opacity-60'></div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className='w-full space-y-6 lg:w-1/2'>
                        {/* Section Tag */}
                        <div className='inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800'>
                            Technology Explained
                        </div>

                        {/* Main Heading */}
                        <h2 className='text-3xl leading-tight font-normal text-gray-900 sm:text-4xl lg:text-5xl'>
                            What is an eSIM?
                        </h2>

                        {/* Description */}
                        <p className='text-lg leading-relaxed text-gray-700'>
                            An eSIM (embedded SIM) is a digital SIM card that's built directly into your device. Unlike
                            traditional physical SIM cards, eSIMs can be activated remotely and allow you to switch
                            between carriers without needing to physically swap cards.
                        </p>

                        {/* Key Benefits */}
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold text-gray-900'>Key Benefits:</h3>

                            <div className='space-y-3'>
                                <div className='flex items-start gap-3'>
                                    <div className='mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500'>
                                        <svg
                                            className='h-4 w-4 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900'>No Physical Cards</h4>
                                        <p className='text-gray-600'>
                                            Everything is digital - no more tiny SIM cards to lose or damage
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                                        <svg
                                            className='h-4 w-4 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M13 10V3L4 14h7v7l9-11h-7z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900'>Instant Activation</h4>
                                        <p className='text-gray-600'>Get connected in minutes, not hours or days</p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500'>
                                        <svg
                                            className='h-4 w-4 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900'>Multiple Plans</h4>
                                        <p className='text-gray-600'>
                                            Store multiple carrier profiles and switch between them easily
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsEsim;
