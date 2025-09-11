'use client';

import React from 'react';

import { FaBell, FaCheckCircle, FaDatabase, FaGlobe, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

interface FeatureItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

const WhyChoose: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: FaDatabase,
            title: 'Flexible Data Plans',
            description:
                "Get cellular data that works for your budget and itinerary. From 1 GB to unlimited plans, we've got you covered!"
        },
        {
            icon: FaCheckCircle,
            title: 'Simple Setup',
            description:
                'Just download our eSIM app, install the eSIM, and buy an eSIM data plan — it will activate automatically the moment you reach your destination.'
        },
        {
            icon: FaShieldAlt,
            title: 'No Hidden Costs',
            description:
                'If you want to avoid costly roaming, eSIM technology offers a good alternative. Know how much your internet connection will cost before you take off!'
        },
        {
            icon: FaMobileAlt,
            title: 'One eSIM for Multiple Trips',
            description:
                'Add new destinations to your existing eSIM — no need to install new eSIMs every time. Just top up and connect!'
        },
        {
            icon: FaBell,
            title: 'Smart Usage Alerts',
            description:
                "Don't risk running out of eSIM data at the worst possible moment — we'll notify you when you've used up 80% of your plan."
        },
        {
            icon: FaGlobe,
            title: 'Worldwide Coverage',
            description:
                'Stay online wherever you go — get a Global eSIM data plan or regional plan to explore entire regions and beyond.'
        }
    ];

    return (
        <section className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <p className='mb-2 text-sm text-gray-500'>Why choose us?</p>
                    <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
                        Stay connected while traveling
                    </h2>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='group relative cursor-pointer overflow-hidden rounded-xl bg-gray-50 p-6 transition-all duration-300 ease-in-out'>
                            {/* Animated Border - Only on Hover */}
                            <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'>
                                <div className='absolute inset-[2px] rounded-xl bg-gray-50'></div>
                            </div>

                            {/* Content */}
                            <div className='relative z-10'>
                                {/* Icon */}
                                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-transparent transition-all duration-300 group-hover:scale-110'>
                                    <feature.icon className='h-6 w-6 text-gray-800 transition-colors duration-300 group-hover:text-blue-600' />
                                </div>

                                {/* Title */}
                                <h3 className='mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700'>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className='text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700'>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
