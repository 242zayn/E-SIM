'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ChevronRightIcon, GlobeIcon, MapPinIcon } from 'lucide-react';

interface CountryDestination {
    name: string;
    price: string;
    flag: string;
    dataSize?: string;
}

interface RegionDestination {
    name: string;
    price: string;
    description: string;
    countries: number;
    icon?: string;
}

const TravelDestinationTabs = () => {
    // Updated Country Data
    const countryDestinations: CountryDestination[] = [
        { name: 'Greece', price: 'From US$4.49', flag: '🇬🇷', dataSize: '1GB - 30 Days' },
        { name: 'Spain', price: 'From US$3.99', flag: '🇪🇸', dataSize: '1GB - 30 Days' },
        { name: 'Italy', price: 'From US$3.99', flag: '🇮🇹', dataSize: '1GB - 30 Days' },
        { name: 'Turkey', price: 'From US$3.99', flag: '🇹🇷', dataSize: '1GB - 30 Days' },
        { name: 'France', price: 'From US$3.99', flag: '🇫🇷', dataSize: '1GB - 30 Days' },
        { name: 'Portugal', price: 'From US$3.99', flag: '🇵🇹', dataSize: '1GB - 30 Days' },
        { name: 'India', price: 'From US$3.99', flag: '🇮🇳', dataSize: '1GB - 30 Days' },
        { name: 'Canada', price: 'From US$5.29', flag: '🇨🇦', dataSize: '1GB - 30 Days' },
        { name: 'China', price: 'From US$4.49', flag: '🇨🇳', dataSize: '1GB - 30 Days' }
    ];

    // Updated Region Data
    const regionDestinations: RegionDestination[] = [
        { name: 'Europe', price: 'From US$19.99', description: 'Multi-country coverage', countries: 32 },
        { name: 'Asia Pacific', price: 'From US$15.99', description: 'High-speed networks', countries: 28 },
        { name: 'Americas', price: 'From US$22.99', description: 'North & South America', countries: 25 },
        { name: 'Middle East', price: 'From US$13.99', description: 'Premium connectivity', countries: 18 },
        { name: 'Africa', price: 'From US$18.99', description: 'Expanding coverage', countries: 22 },
        { name: 'Global Plan', price: 'From US$39.99', description: 'Worldwide access', countries: 180 }
    ];

    return (
        <section className='bg-gradient-to-b from-blue-50 to-white py-16 lg:py-20'>
            <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Enhanced Header Section */}
                <div className='mb-12 text-center'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700'>
                        <GlobeIcon className='h-4 w-4' />
                        Global eSIM Solutions
                    </div>

                    <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl'>
                        Choose Your Perfect Plan
                    </h2>

                    <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600'>
                        Get instant mobile data worldwide. No physical SIM cards, no roaming fees, just seamless
                        connectivity wherever you travel.
                    </p>

                    <Button
                        size='lg'
                        className='rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'>
                        View All 180+ Destinations
                        <ChevronRightIcon className='ml-2 h-4 w-4' />
                    </Button>
                </div>

                {/* Beautiful Modern Tabs */}
                <Tabs defaultValue='country' className='w-full'>
                    {/* Enhanced Tabs List */}
                    <div className='mb-8 flex justify-center'>
                        <TabsList className='grid h-14 w-full max-w-md grid-cols-2 rounded-2xl border border-gray-200 bg-white p-1 shadow-lg'>
                            <TabsTrigger
                                value='country'
                                className='rounded-xl text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-md'>
                                <MapPinIcon className='mr-2 h-4 w-4' />
                                By Country
                            </TabsTrigger>
                            <TabsTrigger
                                value='region'
                                className='rounded-xl text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-md'>
                                <GlobeIcon className='mr-2 h-4 w-4' />
                                By Region
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Country Tab Content */}
                    <TabsContent value='country' className='mt-8'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {countryDestinations.map((country, index) => (
                                <div
                                    key={index}
                                    className='group transform cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-2xl'>
                                                {country.flag}
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600'>
                                                    {country.name}
                                                </h3>
                                                <p className='text-sm font-medium text-gray-500'>{country.price}</p>
                                                <p className='text-xs text-gray-400'>{country.dataSize}</p>
                                            </div>
                                        </div>

                                        <div className='rounded-full bg-gray-50 p-2 transition-colors group-hover:bg-blue-50'>
                                            <ChevronRightIcon className='h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Region Tab Content */}
                    <TabsContent value='region' className='mt-8'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {regionDestinations.map((region, index) => (
                                <div
                                    key={index}
                                    className='group transform cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100'>
                                                <GlobeIcon className='h-6 w-6 text-purple-600' />
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600'>
                                                    {region.name}
                                                </h3>
                                                <p className='text-sm font-medium text-gray-500'>{region.price}</p>
                                                <p className='text-xs text-gray-400'>
                                                    {region.description} • {region.countries} countries
                                                </p>
                                            </div>
                                        </div>

                                        <div className='rounded-full bg-gray-50 p-2 transition-colors group-hover:bg-purple-50'>
                                            <ChevronRightIcon className='h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-600' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default TravelDestinationTabs;
