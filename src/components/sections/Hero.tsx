'use client';

import { useState } from 'react';

import Image from 'next/image';

import DestinationModal from '../modals/DestinationModal';

const Hero = () => {
    const [showDestinationModal, setShowDestinationModal] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<string>('');

    const handleDestinationSelect = (destination: string) => {
        setSelectedDestination(destination);
    };

    return (
        <>
            <section
                className='flex min-h-screen items-center px-4 sm:px-6 lg:px-8'
                style={{
                    background: '#bddbff',
                    backgroundImage: 'radial-gradient(circle, rgba(189, 219, 255, 1) 0%, rgba(32, 145, 201, 1) 96%)'
                }}>
                <div className='container mx-auto max-w-7xl'>
                    <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-12'>
                        {/* Left Side - Text Content */}
                        <div className='flex-1 text-center lg:text-left'>
                            {/* Brand Section */}
                            <div className='mb-6 flex items-center justify-center gap-3 lg:justify-start'>
                                <span className='text-sm text-gray-700'>By the creators of</span>
                                <div className='rounded bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm'>
                                    <Image alt='Brand Logo' width={60} height={15} src='/images/Diploy_logo.png' />
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h1 className='mb-6 text-3xl leading-tight font-medium text-gray-900 sm:text-4xl md:text-5xl'>
                                Stay Connected Globally with Smart eSIM Solutions
                            </h1>

                            {/* Description */}
                            <p className='mb-8 text-lg text-gray-700 sm:text-xl'>
                                Experience seamless international connectivity. Get instant access to local data plans
                                in 180+ countries without the hassle of physical SIM cards.
                            </p>

                            {/* Search Section */}
                            <div className='space-y-4'>
                                <p className='text-lg font-medium text-gray-800'>
                                    Choose your destination to get started
                                </p>

                                <button
                                    onClick={() => setShowDestinationModal(true)}
                                    className='flex w-full max-w-lg items-center justify-between rounded-lg border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'>
                                    <span
                                        className={`text-base ${
                                            selectedDestination ? 'font-medium text-gray-900' : 'text-gray-600'
                                        }`}>
                                        {selectedDestination || 'Search for destination'}
                                    </span>

                                    <div className='rounded bg-blue-500 p-2 transition-colors hover:bg-blue-600'>
                                        <svg
                                            className='h-5 w-5 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                            />
                                        </svg>
                                    </div>
                                </button>

                                {/* Features List */}
                                <div className='flex flex-wrap justify-center gap-4 pt-2 lg:justify-start'>
                                    <div className='flex items-center gap-2 text-sm text-gray-700'>
                                        <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                        <span className='font-medium'>180+ Countries</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-700'>
                                        <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                                        <span className='font-medium'>Instant Activation</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-700'>
                                        <div className='h-2 w-2 rounded-full bg-yellow-500'></div>
                                        <span className='font-medium'>No Roaming Fees</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Bigger Image (Fixed) */}
                        <div className='flex flex-1 justify-center lg:justify-end'>
                            <div className='relative mt-12 w-full max-w-none lg:max-w-2xl xl:max-w-3xl'>
                                <Image
                                    src='/images/herosideimg.png'
                                    alt='Woman holding eSIM phone'
                                    width={900}
                                    height={900}
                                    className='h-auto w-full rounded-lg'
                                    priority
                                />

                                {/* Enhanced Decorative elements */}
                                <div className='absolute -top-8 -right-8 h-32 w-32 animate-pulse rounded-full bg-white/30 backdrop-blur-sm'></div>
                                <div className='absolute -bottom-8 -left-8 h-24 w-24 animate-pulse rounded-full bg-blue-500/30 backdrop-blur-sm'></div>

                                {/* Additional floating element */}
                                <div className='absolute top-1/4 -left-6 h-16 w-16 rounded-full bg-yellow-400/20 backdrop-blur-sm'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* External Destination Modal */}
            <DestinationModal
                isOpen={showDestinationModal}
                onClose={() => setShowDestinationModal(false)}
                onSelect={handleDestinationSelect}
            />
        </>
    );
};

export default Hero;
