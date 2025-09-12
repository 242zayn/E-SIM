'use client';

import React from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { ArrowRight, CheckCircle, Globe, Heart, Shield, Star, Users, Zap } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className='bg-white pt-24'>
            {/* Hero Section - Clean & Premium */}
            <section className='bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16'>
                <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='mb-8 text-center'>
                        <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700'>
                            <Heart className='h-4 w-4' />
                            Our Story
                        </div>
                        <h1 className='mb-4 text-3xl font-medium text-gray-900 md:text-4xl'>About eSIM Tell</h1>
                        <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                            Connecting travelers worldwide with seamless, affordable eSIM solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Mission */}
            <section className='py-12 lg:py-16'>
                <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                        {/* Left Content */}
                        <div className='space-y-6'>
                            <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700'>
                                <Globe className='h-4 w-4' />
                                Our Mission
                            </div>

                            <h2 className='text-2xl font-medium text-gray-900 md:text-3xl'>
                                Revolutionizing Global Connectivity
                            </h2>

                            <p className='leading-relaxed text-gray-600'>
                                We provide seamless, instant eSIM solutions that keep you connected wherever your
                                journey takes you. No more expensive roaming charges or local SIM card hassles.
                            </p>

                            {/* Key Points */}
                            <div className='space-y-3'>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-green-500' />
                                    <span className='text-gray-700'>Instant activation in 60 seconds</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-blue-500' />
                                    <span className='text-gray-700'>180+ countries coverage</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-purple-500' />
                                    <span className='text-gray-700'>Transparent pricing</span>
                                </div>
                            </div>

                            <Button className='rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700'>
                                Explore Plans
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </div>

                        {/* Right Image */}
                        <div className='relative'>
                            <div className='overflow-hidden rounded-xl shadow-lg'>
                                <Image
                                    src='/images/about_us_img1.png'
                                    alt='Global connectivity'
                                    width={500}
                                    height={400}
                                    className='h-auto w-full rounded-bl-4xl object-cover'
                                    priority
                                />

                                {/* Floating Badge */}
                                <div className='absolute top-4 right-4 rounded-lg bg-white p-3 shadow-md'>
                                    <div className='text-center'>
                                        <div className='text-xl font-medium text-blue-600'>180+</div>
                                        <div className='text-xs text-gray-600'>Countries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Team - Swapped Layout */}
            <section className='bg-gray-50 py-12 lg:py-16'>
                <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                        {/* Left Image */}
                        <div className='relative order-2 lg:order-1'>
                            <div className='overflow-hidden rounded-xl shadow-lg'>
                                <Image
                                    src='/images/about_us_img2.png'
                                    alt='Our team'
                                    width={500}
                                    height={400}
                                    className='h-auto w-full object-cover'
                                />

                                {/* Floating Badge */}
                                <div className='absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-md'>
                                    <div className='flex items-center gap-2'>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className='h-3 w-3 fill-yellow-400 text-yellow-400' />
                                        ))}
                                        <span className='ml-1 text-sm font-medium'>4.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className='order-1 space-y-6 lg:order-2'>
                            <div className='inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700'>
                                <Users className='h-4 w-4' />
                                Our Team
                            </div>

                            <h2 className='text-2xl font-medium text-gray-900 md:text-3xl'>
                                Built by Travelers, for Travelers
                            </h2>

                            <p className='leading-relaxed text-gray-600'>
                                Our team of engineers and travel experts work tirelessly to ensure your connectivity
                                experience is flawless. We've tested our solutions in real-world scenarios worldwide.
                            </p>

                            {/* Stats */}
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='text-center lg:text-left'>
                                    <div className='text-2xl font-medium text-gray-900'>1M+</div>
                                    <div className='text-sm text-gray-600'>Happy Users</div>
                                </div>
                                <div className='text-center lg:text-left'>
                                    <div className='text-2xl font-medium text-gray-900'>24/7</div>
                                    <div className='text-sm text-gray-600'>Support</div>
                                </div>
                            </div>

                            {/* Values */}
                            <div className='space-y-3'>
                                <div className='flex items-center gap-3'>
                                    <Shield className='h-5 w-5 text-blue-500' />
                                    <span className='text-gray-700'>Security first approach</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Heart className='h-5 w-5 text-red-500' />
                                    <span className='text-gray-700'>Customer obsessed</span>
                                </div>
                            </div>

                            <Button
                                variant='outline'
                                className='rounded-lg border-purple-200 px-6 py-2 text-purple-700 hover:bg-purple-50'>
                                Meet Our Team
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Technology */}
            <section className='py-12 lg:py-16'>
                <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                        {/* Left Content */}
                        <div className='space-y-6'>
                            <div className='inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700'>
                                <Zap className='h-4 w-4' />
                                Innovation
                            </div>

                            <h2 className='text-2xl font-medium text-gray-900 md:text-3xl'>
                                The Future of Travel Connectivity
                            </h2>

                            <p className='leading-relaxed text-gray-600'>
                                Our cutting-edge eSIM platform uses AI to automatically connect you to the best
                                available networks worldwide. Real-time optimization ensures fastest, most reliable
                                connections.
                            </p>

                            {/* Tech Features */}
                            <div className='space-y-3'>
                                <div className='flex items-center gap-3'>
                                    <Zap className='h-5 w-5 text-yellow-500' />
                                    <span className='text-gray-700'>AI network selection</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Globe className='h-5 w-5 text-blue-500' />
                                    <span className='text-gray-700'>Smart roaming technology</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Shield className='h-5 w-5 text-green-500' />
                                    <span className='text-gray-700'>Military-grade security</span>
                                </div>
                            </div>

                            {/* Performance Stats */}
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='text-center lg:text-left'>
                                    <div className='text-2xl font-medium text-gray-900'>99.9%</div>
                                    <div className='text-sm text-gray-600'>Uptime</div>
                                </div>
                                <div className='text-center lg:text-left'>
                                    <div className='text-2xl font-medium text-gray-900'>&lt; 30s</div>
                                    <div className='text-sm text-gray-600'>Activation</div>
                                </div>
                            </div>

                            <Button className='rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700'>
                                Try eSIM Tell
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </div>

                        {/* Right Image */}
                        <div className='relative'>
                            <div className='overflow-hidden rounded-xl shadow-lg'>
                                <Image
                                    src='/images/plane-sky-phone-app.png'
                                    alt='Advanced technology'
                                    width={500}
                                    height={400}
                                    className='h-auto w-full object-cover'
                                />

                                {/* Floating Badge */}
                                <div className='absolute top-4 right-4 rounded-lg bg-white p-3 shadow-md'>
                                    <div className='text-center'>
                                        <div className='text-lg font-medium text-green-600'>5G</div>
                                        <div className='text-xs text-gray-600'>Ready</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-gradient-to-r from-blue-600 to-purple-600 py-16'>
                <div className='container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8'>
                    <h2 className='mb-4 text-2xl font-medium text-white md:text-3xl'>
                        Ready to Experience Global Connectivity?
                    </h2>
                    <p className='mx-auto mb-6 max-w-2xl text-blue-100'>
                        Join millions of travelers who trust eSIM Tell for seamless connectivity worldwide.
                    </p>
                    <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                        <Button className='rounded-lg bg-white px-6 py-2 text-blue-600 hover:bg-gray-100'>
                            Browse Plans
                        </Button>
                        <Button
                            variant='outline'
                            className='rounded-lg border-white px-6 py-2 text-black hover:bg-white/10'>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
