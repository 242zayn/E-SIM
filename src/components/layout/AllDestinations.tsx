'use client';

import React, { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ChevronRight, Globe, MapPin, Search, Sparkles } from 'lucide-react';

interface Destination {
    id: string;
    name: string;
    price: string;
    flag?: string;
    countries?: number;
    type: 'country' | 'region';
    featured?: boolean;
}

const AllDestinations = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Dummy Data - Enhanced and organized
    const destinations: Destination[] = [
        // Countries
        { id: '1', name: 'Afghanistan', price: 'From US$5.79', flag: '🇦🇫', type: 'country' },
        { id: '2', name: 'Albania', price: 'From US$3.99', flag: '🇦🇱', type: 'country', featured: true },
        { id: '3', name: 'Algeria', price: 'From US$6.29', flag: '🇩🇿', type: 'country' },
        { id: '4', name: 'Andorra', price: 'From US$3.99', flag: '🇦🇩', type: 'country' },
        { id: '5', name: 'Anguilla', price: 'From US$8.49', flag: '🇦🇮', type: 'country' },
        { id: '6', name: 'Argentina', price: 'From US$5.29', flag: '🇦🇷', type: 'country' },
        { id: '7', name: 'Australia', price: 'From US$4.99', flag: '🇦🇺', type: 'country', featured: true },
        { id: '8', name: 'Austria', price: 'From US$3.49', flag: '🇦🇹', type: 'country' },
        { id: '9', name: 'Bahrain', price: 'From US$4.29', flag: '🇧🇭', type: 'country' },
        { id: '10', name: 'Bangladesh', price: 'From US$2.99', flag: '🇧🇩', type: 'country' },
        { id: '11', name: 'Belgium', price: 'From US$3.79', flag: '🇧🇪', type: 'country' },
        { id: '12', name: 'Brazil', price: 'From US$6.99', flag: '🇧🇷', type: 'country', featured: true },

        // Regions
        { id: '101', name: 'Africa', price: 'From US$26.49', countries: 34, type: 'region', featured: true },
        { id: '102', name: 'American Samoa', price: 'From US$59.90', countries: 1, type: 'region' },
        { id: '103', name: 'Antigua and Barbuda', price: 'From US$8.99', countries: 1, type: 'region' },
        { id: '104', name: 'Europe', price: 'From US$19.99', countries: 42, type: 'region', featured: true },
        { id: '105', name: 'Asia Pacific', price: 'From US$15.99', countries: 28, type: 'region' },
        { id: '106', name: 'Americas', price: 'From US$24.99', countries: 25, type: 'region' }
    ];

    // Filter destinations based on search and tab
    const filteredDestinations = useMemo(() => {
        let filtered = destinations;

        // Filter by tab
        if (activeTab !== 'all') {
            filtered = filtered.filter((dest) => dest.type === activeTab);
        }

        // Filter by search
        if (searchQuery.trim()) {
            filtered = filtered.filter((dest) => dest.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return filtered;
    }, [activeTab, searchQuery]);

    const getDestinationIcon = (dest: Destination) => {
        if (dest.type === 'region') {
            return <Globe className='h-8 w-8 text-blue-600' />;
        }
        return dest.flag ? <span className='text-2xl'>{dest.flag}</span> : <MapPin className='h-6 w-6 text-gray-400' />;
    };

    return (
        <section className='bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20'>
            <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='mb-12 text-center'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700'>
                        <Sparkles className='h-4 w-4' />
                        Global Coverage
                    </div>

                    <h1 className='mb-6 text-4xl font-medium text-gray-900 md:text-5xl'>All destinations</h1>

                    <p className='mx-auto mb-8 max-w-3xl text-lg text-gray-600'>
                        Find the best data plans in over 200 destinations — and enjoy easy and safe internet access
                        wherever you go. Connect instantly with our premium eSIM solutions.
                    </p>
                </div>

                {/* Tabs and Search Section */}
                <div className='mb-8'>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
                        {/* Enhanced Tabs */}
                        <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
                            <TabsList className='grid h-12 w-full grid-cols-3 rounded-xl border border-gray-200 bg-white p-1 shadow-sm sm:w-auto'>
                                <TabsTrigger
                                    value='all'
                                    className='rounded-lg font-semibold transition-all duration-300 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm'>
                                    All
                                </TabsTrigger>
                                <TabsTrigger
                                    value='country'
                                    className='rounded-lg font-semibold transition-all duration-300 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm'>
                                    Country
                                </TabsTrigger>
                                <TabsTrigger
                                    value='region'
                                    className='rounded-lg font-semibold transition-all duration-300 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm'>
                                    Region
                                </TabsTrigger>
                            </TabsList>

                            {/* Enhanced Search */}
                            <div className='relative w-full sm:w-auto sm:min-w-[300px]'>
                                <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400' />
                                <Input
                                    type='text'
                                    placeholder='Search for destination'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className='h-12 rounded-xl border-gray-200 bg-white pr-4 pl-10 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                                />
                                {searchQuery && (
                                    <Button
                                        variant='ghost'
                                        size='sm'
                                        onClick={() => setSearchQuery('')}
                                        className='absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 transform rounded-lg p-0 hover:bg-gray-100'>
                                        ×
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Results Section */}
                        <TabsContent value={activeTab} className='mt-6'>
                            <div className='mb-6'>
                                <p className='text-sm text-gray-600'>
                                    Showing {filteredDestinations.length} destinations
                                    {searchQuery && <span> for "{searchQuery}"</span>}
                                </p>
                            </div>

                            {filteredDestinations.length > 0 ? (
                                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                                    {filteredDestinations.map((dest) => (
                                        <div
                                            key={dest.id}
                                            className={`group relative transform cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md ${
                                                dest.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
                                            }`}>
                                            {dest.featured && (
                                                <div className='absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white'>
                                                    Popular
                                                </div>
                                            )}

                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-4'>
                                                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-50'>
                                                        {getDestinationIcon(dest)}
                                                    </div>

                                                    <div>
                                                        <h3 className='text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600'>
                                                            {dest.name}
                                                        </h3>
                                                        <p className='text-sm font-medium text-gray-600'>
                                                            {dest.price}
                                                            {dest.countries && (
                                                                <span className='text-gray-400'>
                                                                    {' '}
                                                                    • {dest.countries} countries
                                                                </span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className='rounded-full bg-gray-50 p-2 transition-colors group-hover:bg-blue-50'>
                                                    <ChevronRight className='h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600' />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='py-16 text-center'>
                                    <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                                        <Search className='h-8 w-8 text-gray-400' />
                                    </div>
                                    <h3 className='mb-2 text-lg font-medium text-gray-900'>No destinations found</h3>
                                    <p className='mb-4 text-gray-600'>Try adjusting your search or filter criteria</p>
                                    <Button
                                        variant='outline'
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveTab('all');
                                        }}>
                                        Clear filters
                                    </Button>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white'>
                        <h3 className='mb-2 text-2xl font-semibold'>Can't find your destination?</h3>
                        <p className='mb-6 text-blue-100'>
                            We're constantly expanding our coverage. Contact us to request a new destination.
                        </p>
                        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                            <Button variant='secondary' size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                                Request Destination
                            </Button>
                            <Button variant='outline' size='lg' className='border-white text-black hover:bg-white/10'>
                                View Coverage Map
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllDestinations;
