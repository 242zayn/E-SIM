'use client';

import React, { useMemo, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CheckCircle, ChevronDown, Info, Laptop, Search, Smartphone, Sparkles, Tablet, Watch } from 'lucide-react';

interface DeviceModel {
    name: string;
    supported: boolean;
}

interface DeviceBrand {
    id: string;
    brand: string;
    models: DeviceModel[];
    icon?: React.ReactNode;
}

interface DeviceCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    brands: DeviceBrand[];
}

const DeviceCompatibility = () => {
    const [activeTab, setActiveTab] = useState('smartphones');
    const [searchQuery, setSearchQuery] = useState('');

    // Enhanced Device Data with realistic models
    const deviceData: DeviceCategory[] = [
        {
            id: 'smartphones',
            name: 'Smartphones',
            icon: <Smartphone className='h-5 w-5' />,
            brands: [
                {
                    id: 'apple-phones',
                    brand: 'iPhone',
                    models: [
                        { name: 'iPhone 15 Pro Max', supported: true },
                        { name: 'iPhone 15 Pro', supported: true },
                        { name: 'iPhone 15 Plus', supported: true },
                        { name: 'iPhone 15', supported: true },
                        { name: 'iPhone 14 Pro Max', supported: true },
                        { name: 'iPhone 14 Pro', supported: true },
                        { name: 'iPhone 14 Plus', supported: true },
                        { name: 'iPhone 14', supported: true },
                        { name: 'iPhone 13 Pro Max', supported: true },
                        { name: 'iPhone 13 Pro', supported: true },
                        { name: 'iPhone 13', supported: true },
                        { name: 'iPhone 13 Mini', supported: true },
                        { name: 'iPhone 12 Pro Max', supported: true },
                        { name: 'iPhone 12 Pro', supported: true },
                        { name: 'iPhone 12', supported: true },
                        { name: 'iPhone 12 Mini', supported: true },
                        { name: 'iPhone SE (3rd gen)', supported: true },
                        { name: 'iPhone 11 Pro Max', supported: true },
                        { name: 'iPhone 11 Pro', supported: true },
                        { name: 'iPhone 11', supported: true },
                        { name: 'iPhone XS Max', supported: true },
                        { name: 'iPhone XS', supported: true },
                        { name: 'iPhone XR', supported: true }
                    ]
                },
                {
                    id: 'samsung',
                    brand: 'Samsung',
                    models: [
                        { name: 'Galaxy S24 Ultra', supported: true },
                        { name: 'Galaxy S24+', supported: true },
                        { name: 'Galaxy S24', supported: true },
                        { name: 'Galaxy S23 Ultra', supported: true },
                        { name: 'Galaxy S23+', supported: true },
                        { name: 'Galaxy S23', supported: true },
                        { name: 'Galaxy S22 Ultra', supported: true },
                        { name: 'Galaxy S22+', supported: true },
                        { name: 'Galaxy S22', supported: true },
                        { name: 'Galaxy S21 Ultra 5G', supported: true },
                        { name: 'Galaxy S21+ 5G', supported: true },
                        { name: 'Galaxy S21 5G', supported: true },
                        { name: 'Galaxy S20 Ultra', supported: true },
                        { name: 'Galaxy S20+', supported: true },
                        { name: 'Galaxy S20', supported: true },
                        { name: 'Galaxy Note 20 Ultra', supported: true },
                        { name: 'Galaxy Note 20', supported: true },
                        { name: 'Galaxy Z Fold 5', supported: true },
                        { name: 'Galaxy Z Fold 4', supported: true },
                        { name: 'Galaxy Z Fold 3 5G', supported: true },
                        { name: 'Galaxy Z Flip 5', supported: true },
                        { name: 'Galaxy Z Flip 4', supported: true },
                        { name: 'Galaxy Z Flip 3 5G', supported: true },
                        { name: 'Galaxy XCover 7 Pro', supported: true }
                    ]
                },
                {
                    id: 'google',
                    brand: 'Google Pixel',
                    models: [
                        { name: 'Pixel 8 Pro', supported: true },
                        { name: 'Pixel 8', supported: true },
                        { name: 'Pixel 7a', supported: true },
                        { name: 'Pixel 7 Pro', supported: true },
                        { name: 'Pixel 7', supported: true },
                        { name: 'Pixel 6 Pro', supported: true },
                        { name: 'Pixel 6', supported: true },
                        { name: 'Pixel 6a', supported: true },
                        { name: 'Pixel 5a 5G', supported: true },
                        { name: 'Pixel 5', supported: true },
                        { name: 'Pixel 4a 5G', supported: true },
                        { name: 'Pixel 4a', supported: true },
                        { name: 'Pixel 4 XL', supported: true },
                        { name: 'Pixel 4', supported: true },
                        { name: 'Pixel 3a XL', supported: true },
                        { name: 'Pixel 3a', supported: true },
                        { name: 'Pixel 3 XL', supported: true },
                        { name: 'Pixel 3', supported: true }
                    ]
                }
            ]
        },
        {
            id: 'smartwatches',
            name: 'Smartwatches',
            icon: <Watch className='h-5 w-5' />,
            brands: [
                {
                    id: 'apple-watch',
                    brand: 'Apple Watch',
                    models: [
                        { name: 'Apple Watch Ultra 2', supported: true },
                        { name: 'Apple Watch Ultra', supported: true },
                        { name: 'Apple Watch Series 9', supported: true },
                        { name: 'Apple Watch Series 8', supported: true },
                        { name: 'Apple Watch Series 7', supported: true },
                        { name: 'Apple Watch Series 6', supported: true },
                        { name: 'Apple Watch Series 5', supported: true },
                        { name: 'Apple Watch Series 4', supported: true },
                        { name: 'Apple Watch SE (2nd gen)', supported: true },
                        { name: 'Apple Watch SE (1st gen)', supported: true },
                        { name: 'Apple Watch Series 3 (GPS + Cellular)', supported: true }
                    ]
                },
                {
                    id: 'samsung-watch',
                    brand: 'Samsung Galaxy Watch',
                    models: [
                        { name: 'Galaxy Watch 6 Classic', supported: true },
                        { name: 'Galaxy Watch 6', supported: true },
                        { name: 'Galaxy Watch 5 Pro', supported: true },
                        { name: 'Galaxy Watch 5', supported: true },
                        { name: 'Galaxy Watch 4 Classic', supported: true },
                        { name: 'Galaxy Watch 4', supported: true }
                    ]
                }
            ]
        },
        {
            id: 'tablets',
            name: 'Tablets',
            icon: <Tablet className='h-5 w-5' />,
            brands: [
                {
                    id: 'ipad',
                    brand: 'iPad',
                    models: [
                        { name: 'iPad Pro 12.9-inch (6th gen)', supported: true },
                        { name: 'iPad Pro 11-inch (4th gen)', supported: true },
                        { name: 'iPad Air (5th gen)', supported: true },
                        { name: 'iPad Air (4th gen)', supported: true },
                        { name: 'iPad (10th gen)', supported: true },
                        { name: 'iPad (9th gen)', supported: true },
                        { name: 'iPad mini (6th gen)', supported: true },
                        { name: 'iPad Pro 12.9-inch (5th gen)', supported: true },
                        { name: 'iPad Pro 11-inch (3rd gen)', supported: true },
                        { name: 'iPad Pro 12.9-inch (4th gen)', supported: true },
                        { name: 'iPad Pro 11-inch (2nd gen)', supported: true },
                        { name: 'iPad Air (3rd gen)', supported: true },
                        { name: 'iPad mini (5th gen)', supported: true }
                    ]
                },
                {
                    id: 'samsung-tablet',
                    brand: 'Samsung Galaxy Tab',
                    models: [
                        { name: 'Galaxy Tab S9 Ultra', supported: true },
                        { name: 'Galaxy Tab S9+', supported: true },
                        { name: 'Galaxy Tab S9', supported: true },
                        { name: 'Galaxy Tab S8 Ultra', supported: true },
                        { name: 'Galaxy Tab S8+', supported: true },
                        { name: 'Galaxy Tab S8', supported: true },
                        { name: 'Galaxy Tab S7 FE', supported: true },
                        { name: 'Galaxy Tab S7+', supported: true },
                        { name: 'Galaxy Tab S7', supported: true }
                    ]
                }
            ]
        },
        {
            id: 'laptops',
            name: 'Laptops',
            icon: <Laptop className='h-5 w-5' />,
            brands: [
                {
                    id: 'surface',
                    brand: 'Microsoft Surface',
                    models: [
                        { name: 'Surface Laptop Studio 2', supported: true },
                        { name: 'Surface Pro 9', supported: true },
                        { name: 'Surface Laptop 5', supported: true },
                        { name: 'Surface Pro 8', supported: true },
                        { name: 'Surface Go 3', supported: true },
                        { name: 'Surface Pro X', supported: true },
                        { name: 'Surface Duo 2', supported: true },
                        { name: 'Surface Duo', supported: true }
                    ]
                },
                {
                    id: 'lenovo',
                    brand: 'Lenovo ThinkPad',
                    models: [
                        { name: 'ThinkPad X1 Carbon Gen 11', supported: true },
                        { name: 'ThinkPad X1 Yoga Gen 8', supported: true },
                        { name: 'ThinkPad X1 Nano Gen 3', supported: true },
                        { name: 'ThinkPad T14s Gen 4', supported: true },
                        { name: 'ThinkPad X13 Gen 4', supported: true }
                    ]
                }
            ]
        }
    ];

    // Filter devices based on search and tab
    const filteredData = useMemo(() => {
        const currentCategory = deviceData.find((cat) => cat.id === activeTab);
        if (!currentCategory) return null;

        if (!searchQuery.trim()) return currentCategory;

        return {
            ...currentCategory,
            brands: currentCategory.brands
                .map((brand) => ({
                    ...brand,
                    models: brand.models.filter(
                        (model) =>
                            model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                }))
                .filter((brand) => brand.models.length > 0)
        };
    }, [activeTab, searchQuery, deviceData]);

    const getTotalDevices = (category: DeviceCategory) => {
        return category.brands.reduce((total, brand) => total + brand.models.length, 0);
    };

    const getFilteredCount = () => {
        if (!filteredData) return 0;
        return getTotalDevices(filteredData);
    };

    return (
        <section className='bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20'>
            <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='mb-12 text-center'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700'>
                        <Sparkles className='h-4 w-4' />
                        Device Compatibility
                    </div>

                    <h1 className='mb-6 text-4xl font-medium text-gray-900 md:text-5xl lg:text-6xl'>
                        Devices that support eSIMs
                    </h1>

                    <p className='mx-auto mb-8 max-w-3xl text-lg text-gray-600'>
                        Only devices that are carrier-unlocked and support eSIM technology can use our service. Check if
                        your device is compatible below.
                    </p>

                    {/* Search Bar */}
                    <div className='relative mx-auto max-w-lg'>
                        <Search className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                        <Input
                            type='text'
                            placeholder='Search for device'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='h-14 rounded-2xl border-gray-200 bg-white pr-4 pl-12 text-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                        />
                        {searchQuery && (
                            <Button
                                variant='ghost'
                                size='sm'
                                onClick={() => setSearchQuery('')}
                                className='absolute top-1/2 right-3 h-8 w-8 -translate-y-1/2 transform rounded-full p-0 hover:bg-gray-100'>
                                ×
                            </Button>
                        )}
                    </div>
                </div>

                {/* Device Category Tabs */}
                <div className='mb-12'>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
                        {/* Enhanced Category Tabs */}
                        <div className='mb-8 flex justify-center'>
                            <TabsList className='grid h-16 w-full max-w-2xl grid-cols-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg lg:grid-cols-4'>
                                {deviceData.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className='flex items-center gap-2 rounded-xl px-4 py-2 font-semibold transition-all duration-300 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-md'>
                                        {category.icon}
                                        <span className='hidden sm:inline'>{category.name}</span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Device Content */}
                        <TabsContent value={activeTab} className='mt-8'>
                            {filteredData && (
                                <div>
                                    {/* Category Header */}
                                    <div className='mb-8 text-center'>
                                        <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100'>
                                            <div className='text-2xl text-yellow-600'>{filteredData.icon}</div>
                                        </div>
                                        <h2 className='mb-2 text-2xl font-bold text-gray-900'>{filteredData.name}</h2>
                                        <p className='text-gray-600'>
                                            Our service is available on most {filteredData.name.toLowerCase()} and many
                                            other devices.
                                            {searchQuery && (
                                                <span className='mt-2 block text-sm'>
                                                    Showing {getFilteredCount()} results for "{searchQuery}"
                                                </span>
                                            )}
                                        </p>
                                    </div>

                                    {/* Device Lists */}
                                    {filteredData.brands.length > 0 ? (
                                        <div className='space-y-4'>
                                            {filteredData.brands.map((brand) => (
                                                <div
                                                    key={brand.id}
                                                    className='rounded-2xl border border-gray-200 bg-white shadow-sm'>
                                                    <Accordion type='single' collapsible className='w-full'>
                                                        <AccordionItem value={brand.id} className='border-none'>
                                                            <AccordionTrigger className='rounded-2xl px-6 py-5 text-left transition-colors hover:no-underline [&[data-state=open]]:bg-blue-50'>
                                                                <div className='flex w-full items-center justify-between pr-4'>
                                                                    <div className='flex items-center gap-4'>
                                                                        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100'>
                                                                            {filteredData.icon}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className='text-lg font-semibold text-gray-900'>
                                                                                {brand.brand}
                                                                            </h3>
                                                                            <p className='text-sm text-gray-500'>
                                                                                {brand.models.length} compatible models
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>

                                                            <AccordionContent className='px-6 pb-6'>
                                                                <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                                                                    {brand.models.map((model, index) => (
                                                                        <div
                                                                            key={index}
                                                                            className='flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100'>
                                                                            <CheckCircle className='h-5 w-5 flex-shrink-0 text-green-500' />
                                                                            <span className='text-sm font-medium text-gray-900'>
                                                                                {model.name}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className='py-16 text-center'>
                                            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                                                <Search className='h-8 w-8 text-gray-400' />
                                            </div>
                                            <h3 className='mb-2 text-lg font-medium text-gray-900'>No devices found</h3>
                                            <p className='mb-4 text-gray-600'>
                                                Try a different search term or check another category
                                            </p>
                                            <Button variant='outline' onClick={() => setSearchQuery('')}>
                                                Clear search
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Important Note */}
                <div className='mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
                    <div className='flex items-start gap-3'>
                        <Info className='mt-1 h-6 w-6 flex-shrink-0 text-blue-600' />
                        <div>
                            <h3 className='mb-2 font-semibold text-blue-900'>Important Note</h3>
                            <p className='text-sm leading-relaxed text-blue-800'>
                                Your device must be carrier-unlocked to use eSIM. Some devices sold by carriers may have
                                eSIM functionality disabled. If you're unsure about your device's compatibility, contact
                                your carrier or check your device settings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className='text-center'>
                    <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white'>
                        <h3 className='mb-2 text-2xl font-semibold'>Can't find your device?</h3>
                        <p className='mb-6 text-blue-100'>
                            Device compatibility is constantly expanding. Check back regularly or contact support for
                            assistance.
                        </p>
                        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                            <Button variant='secondary' size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                                Contact Support
                            </Button>
                            <Button variant='outline' size='lg' className='border-white text-black hover:bg-white/10'>
                                Check Compatibility Guide
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceCompatibility;
