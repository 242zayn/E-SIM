'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
    Building2,
    Calendar,
    ChevronRight,
    CreditCard,
    Download,
    Edit3,
    Gift,
    LogOutIcon,
    Mail,
    MapPin,
    Package,
    Settings,
    Share,
    Shield,
    Star,
    User
} from 'lucide-react';

interface ProfileLayoutProps {
    children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
    const pathname = usePathname();

    // User data (you can move this to context/store)
    const userData = {
        name: 'Sarvesh Sharma',
        email: 'sarvesh.sharma@esimtel.com',
        phone: '+91 98765 43210',
        joinDate: 'March 2024',
        location: 'Mumbai, India',
        membershipLevel: 'Gold Member',
        avatar: '/images/user-avatar.jpg'
    };

    // Navigation links with active state management
    const navigationLinks = [
        {
            label: 'Account Information',
            href: '/profile/settings',
            icon: User,
            description: 'Manage your personal details',
            isActive: pathname === '/profile/settings'
        },
        {
            label: 'Order history',
            href: '/profile/trusted-devices',
            icon: Shield,
            description: 'Secure device management',
            isActive: pathname === '/profile/trusted-devices'
        },
        {
            label: 'Privacy Policy',
            href: '/profile/airmoney',
            icon: Star,
            description: 'Rewards and membership benefits',
            isActive: pathname === '/profile/airmoney'
        },
        {
            label: 'Term & Conditions',
            href: '/profile/credit-cards',
            icon: CreditCard,
            description: 'Payment methods and billing',
            isActive: pathname === '/profile/credit-cards'
        },
        {
            label: 'Customer Support',
            href: '/profile/referral',
            icon: Gift,
            description: 'Share and earn rewards',
            isActive: pathname === '/profile/referral'
        }
    ];

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Profile Header - Common for all profile pages */}
            <div className='border-b bg-white pt-[160px]'>
                <div className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                        <div className='flex items-center gap-6'>
                            {/* Avatar */}
                            <div className='relative'>
                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white shadow-lg md:h-24 md:w-24 md:text-3xl'>
                                    {userData.name.charAt(0)}
                                </div>
                                <div className='absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-green-500'>
                                    <div className='h-3 w-3 rounded-full bg-white'></div>
                                </div>
                            </div>

                            {/* User Info */}
                            <div>
                                <div className='mb-2 flex items-center gap-3'>
                                    <h1 className='text-2xl font-bold text-gray-900 md:text-3xl'>{userData.name}</h1>
                                    <Badge variant='secondary' className='bg-yellow-100 font-medium text-yellow-800'>
                                        {userData.membershipLevel}
                                    </Badge>
                                </div>
                                <div className='flex flex-col gap-2 text-gray-600 sm:flex-row sm:items-center sm:gap-6'>
                                    <div className='flex items-center gap-2'>
                                        <Mail className='h-4 w-4' />
                                        <span className='text-sm'>{userData.email}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <MapPin className='h-4 w-4' />
                                        <span className='text-sm'>{userData.location}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Calendar className='h-4 w-4' />
                                        <span className='text-sm'>Joined {userData.joinDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex items-center gap-3'>
                            <Button variant='outline' size='sm' className='flex items-center gap-2'>
                                <Edit3 className='h-4 w-4' />
                                Edit Profile
                            </Button>
                            <Button variant='outline' size='sm' className='flex items-center gap-2'>
                                <Share className='h-4 w-4' />
                                Share
                            </Button>
                            <Button variant='outline' size='sm' className='flex items-center gap-2'>
                                <Download className='h-4 w-4' />
                                Export Data
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
                <div className='grid gap-8 lg:grid-cols-10'>
                    {/* Left Sidebar - Increased Width (30% ratio) */}
                    <div className='lg:col-span-3'>
                        <Card className='sticky top-8'>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-2 text-lg'>
                                    <Settings className='h-5 w-5' />
                                    Account Settings
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-2'>
                                {navigationLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`group flex items-center justify-between rounded-lg border p-4 transition-all duration-200 ${
                                            link.isActive
                                                ? 'border-blue-500 bg-blue-50 text-blue-900'
                                                : 'border-transparent hover:border-blue-200 hover:bg-blue-50'
                                        }`}>
                                        <div className='flex items-center gap-3'>
                                            <div
                                                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                                                    link.isActive
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                                }`}>
                                                <link.icon className='h-5 w-5' />
                                            </div>
                                            <div className='min-w-0 flex-1'>
                                                <div
                                                    className={`font-medium ${
                                                        link.isActive
                                                            ? 'text-blue-900'
                                                            : 'text-gray-900 group-hover:text-blue-900'
                                                    }`}>
                                                    {link.label}
                                                </div>
                                                <div
                                                    className={`text-sm ${
                                                        link.isActive
                                                            ? 'text-blue-700'
                                                            : 'text-gray-500 group-hover:text-blue-600'
                                                    }`}>
                                                    {link.description}
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className={`h-5 w-5 flex-shrink-0 transition-colors ${
                                                link.isActive
                                                    ? 'text-blue-600'
                                                    : 'text-gray-400 group-hover:text-blue-600'
                                            }`}
                                        />
                                    </Link>
                                ))}
                                <div className='mt-8 flex w-full items-center justify-center'>
                                    <Button variant={'link'} className='mx-auto'>
                                        {' '}
                                        <LogOutIcon /> Logout
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Content Area - 70% width */}
                    <div className='lg:col-span-7'>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
