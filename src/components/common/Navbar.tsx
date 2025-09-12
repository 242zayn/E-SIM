'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { usePublicApiHandler } from '@/lib/usePublicApiHandler';
import { NavbarDataTypes } from '@/types/type';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [showAuthMenu, setShowAuthMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false); // NEW: Profile dropdown state
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTopNavbarVisible, setIsTopNavbarVisible] = useState(true);
    const navRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();

    const { data, isLoading, error } = usePublicApiHandler<NavbarDataTypes>({
        url: '/data/header.json'
    });

    // MODIFIED: Change this to true to see profile dropdown
    const isUserLogin = true; // Change to false to see Account button

    // User data (you can get this from context/state/API)
    const userData = {
        name: 'Sarvesh Sharma',
        email: 'sarvesh@example.com',
        avatar: '/images/user-avatar.jpg' // Optional avatar image
    };

    // Profile dropdown menu items
    const profileMenuItems = [
        { label: 'Account Information', href: '/profile/settings', icon: 'user' },
        { label: 'Trusted Devices', href: '/profile/trusted-devices', icon: 'shield' },
        { label: 'Airmoney & Membership', href: '/profile/airmoney', icon: 'star' },
        { label: 'Saved Cards', href: '/profile/credit-cards', icon: 'credit-card' },
        { label: 'Refer & Earn', href: '/profile/referral', icon: 'gift' },
        { label: 'Orders', href: '/profile/orders', icon: 'package' },
        { label: 'Organizations', href: '/profile/organizations', icon: 'building' },
        { label: 'Sign Out', href: '/logout', icon: 'logout', isSignOut: true }
    ];

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'HI', name: 'हिंदी' },
        { code: 'ES', name: 'Español' },
        { code: 'FR', name: 'Français' }
    ];

    const isLandingPage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isLandingPage) {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        if (isLandingPage) {
            window.addEventListener('scroll', handleScroll);
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }

        return () => {
            if (isLandingPage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isLandingPage]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
                setIsMobileOpen(false);
                setShowAuthMenu(false);
                setShowProfileMenu(false); // NEW: Close profile menu
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = (index: number) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const handleCloseTopNavbar = () => {
        setIsTopNavbarVisible(false);
    };

    // NEW: Function to get icon SVG
    const getIconSVG = (iconType: string) => {
        const iconProps = 'h-4 w-4';

        switch (iconType) {
            case 'user':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                    </svg>
                );
            case 'shield':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                    </svg>
                );
            case 'star':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                        />
                    </svg>
                );
            case 'credit-card':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                        />
                    </svg>
                );
            case 'gift':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                        />
                    </svg>
                );
            case 'package':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                        />
                    </svg>
                );
            case 'building':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                        />
                    </svg>
                );
            case 'logout':
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                    </svg>
                );
            default:
                return (
                    <svg className={iconProps} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                        />
                    </svg>
                );
        }
    };

    if (error) return <div>ERROR....</div>;
    if (isLoading) return <div>LOADING....</div>;

    const navbarClasses = `
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white shadow-md backdrop-blur-sm' : 'bg-transparent'}
    `;

    const textColorClass = isScrolled ? 'text-gray-700' : 'text-white';
    const logoFilterClass = isScrolled ? '' : 'brightness-0 invert';

    return (
        <div className={navbarClasses} ref={navRef}>
            {/* Top Navbar */}
            {isTopNavbarVisible && (
                <nav className='flex w-full flex-col items-center justify-between gap-2 bg-gray-900 px-6 py-2 text-center transition-all duration-300 md:flex-row'>
                    <div className='flex w-full flex-col items-center justify-center gap-2 py-3 md:flex-row'>
                        <p className='text-sm text-white md:text-base'>{data?.topNavbar.content}</p>
                        <button className='rounded-md bg-yellow-200 px-3 py-1 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-300'>
                            {data?.topNavbar.buttonText}
                        </button>
                    </div>

                    <button
                        onClick={handleCloseTopNavbar}
                        className='cursor-pointer rounded p-1 text-white transition-colors hover:text-gray-300'
                        title='Close'>
                        <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </nav>
            )}

            {/* Main Navbar */}
            <div className='w-full px-6 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Left - Logo */}
                    <div className='flex-shrink-0'>
                        <Link href='/'>
                            <Image
                                src={data?.secondNavbar.logo || ''}
                                alt='Logo'
                                height={60}
                                width={140}
                                className={`h-8 w-auto transition-all duration-300 ${logoFilterClass}`}
                            />
                        </Link>
                    </div>

                    {/* Center - Navigation Menu (Desktop) */}
                    <nav className='mx-8 hidden flex-1 items-center justify-center lg:flex'>
                        <div className='flex items-center gap-8'>
                            {data?.secondNavbar.navlinkes.map((item, i) => (
                                <div key={i} className='group relative'>
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className={`py-2 text-sm font-medium transition-colors duration-300 hover:text-gray-500 ${textColorClass}`}
                                            style={{ fontSize: '14px' }}>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => toggleMenu(i)}
                                                onMouseEnter={() => setActiveMenu(i)}
                                                className={`flex items-center py-2 text-sm font-medium transition-colors duration-300 hover:text-gray-500 ${textColorClass}`}
                                                style={{ fontSize: '14px' }}>
                                                {item.label}
                                                <svg
                                                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                                        activeMenu === i ? 'rotate-180' : ''
                                                    }`}
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={2}
                                                        d='M19 9l-7 7-7-7'
                                                    />
                                                </svg>
                                            </button>
                                            {/* Mega Menu Dropdown */}
                                            {item.submenu && (
                                                <div
                                                    className={`absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 transform rounded-lg border bg-white shadow-xl transition-all duration-300 ${
                                                        activeMenu === i
                                                            ? 'visible translate-y-0 opacity-100'
                                                            : 'invisible -translate-y-2 opacity-0'
                                                    }`}
                                                    onMouseLeave={() => setActiveMenu(null)}>
                                                    <div className='p-4'>
                                                        <div className='grid gap-2'>
                                                            {item.submenu.map((link, li) => (
                                                                <Link
                                                                    key={li}
                                                                    href={link.href}
                                                                    className='flex items-center rounded-lg px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-gray-50'
                                                                    style={{ fontSize: '14px' }}>
                                                                    <span className='font-medium'>{link.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Right - Auth/Profile Menu + Language Selector (Desktop) */}
                    <div className='hidden flex-shrink-0 items-center gap-4 lg:flex'>
                        {/* Language Selector */}
                        <div className='group relative'>
                            <button
                                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-gray-500 ${textColorClass}`}>
                                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
                                    />
                                </svg>
                                {selectedLanguage}
                                <svg className='h-3 w-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M19 9l-7 7-7-7'
                                    />
                                </svg>
                            </button>
                            <div className='invisible absolute top-full right-0 mt-2 w-40 rounded-lg border bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100'>
                                <div className='py-2'>
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setSelectedLanguage(lang.code)}
                                            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                                                selectedLanguage === lang.code
                                                    ? 'bg-gray-50 text-gray-900'
                                                    : 'text-gray-700'
                                            }`}>
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MODIFIED: Conditional Auth/Profile Menu */}
                        {isUserLogin ? (
                            /* Profile Dropdown - When User is Logged In */
                            <div className='relative'>
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className={`flex items-center gap-3 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${
                                        isScrolled
                                            ? 'border-gray-300 text-gray-700'
                                            : 'border-white/30 text-white hover:bg-white/10'
                                    }`}>
                                    {/* User Avatar */}
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                                            isScrolled ? 'bg-gray-600 text-white' : 'bg-white/20 text-white'
                                        }`}>
                                        {userData.name.charAt(0)}
                                    </div>
                                    <span className='hidden sm:inline'>{userData.name}</span>
                                    <svg
                                        className={`h-3 w-3 transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`}
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M19 9l-7 7-7-7'
                                        />
                                    </svg>
                                </button>

                                {/* Profile Dropdown Menu */}
                                {showProfileMenu && (
                                    <div className='absolute top-full right-0 z-50 mt-2 w-64 rounded-lg border bg-white shadow-xl'>
                                        {/* User Info Header */}
                                        <div className='border-b border-gray-100 px-4 py-4'>
                                            <div className='flex items-center gap-3'>
                                                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 font-medium text-white'>
                                                    {userData.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className='font-medium text-gray-900'>{userData.name}</div>
                                                    <div className='text-sm text-gray-500'>{userData.email}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        <div className='py-2'>
                                            {profileMenuItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-gray-50 ${
                                                        item.isSignOut
                                                            ? 'border-t border-gray-100 text-red-600 hover:bg-red-50'
                                                            : 'text-gray-700'
                                                    }`}
                                                    onClick={() => setShowProfileMenu(false)}>
                                                    {getIconSVG(item.icon)}
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Account Menu - When User is Not Logged In */
                            <div className='relative'>
                                <button
                                    onClick={() => setShowAuthMenu(!showAuthMenu)}
                                    className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${
                                        isScrolled
                                            ? 'border-gray-300 text-gray-700'
                                            : 'border-white/30 text-white hover:bg-white/10'
                                    }`}>
                                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                        />
                                    </svg>
                                    Account
                                    <svg
                                        className={`h-3 w-3 transition-transform duration-200 ${showAuthMenu ? 'rotate-180' : ''}`}
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M19 9l-7 7-7-7'
                                        />
                                    </svg>
                                </button>
                                {showAuthMenu && (
                                    <div className='absolute top-full right-0 z-50 mt-2 w-48 rounded-lg border bg-white shadow-lg'>
                                        <div className='py-2'>
                                            <Link
                                                href='/login'
                                                className='block w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50'
                                                onClick={() => setShowAuthMenu(false)}>
                                                <div className='flex items-center gap-3'>
                                                    <svg
                                                        className='h-4 w-4'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'>
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                                                        />
                                                    </svg>
                                                    Sign In
                                                </div>
                                            </Link>
                                            <Link
                                                href='/signup'
                                                className='block w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50'
                                                onClick={() => setShowAuthMenu(false)}>
                                                <div className='flex items-center gap-3'>
                                                    <svg
                                                        className='h-4 w-4'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'>
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                                                        />
                                                    </svg>
                                                    Sign Up
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden'>
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className={`p-2 transition-colors ${textColorClass} hover:text-gray-500`}>
                            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MODIFIED: Mobile Auth Buttons - Conditional */}
            {!isUserLogin && (
                <div className='flex items-center justify-center gap-4 border-t border-gray-100 py-3 lg:hidden'>
                    <Link
                        href='/login'
                        className='rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors'>
                        Sign In
                    </Link>
                    <Link
                        href='/signup'
                        className='rounded-lg bg-gray-800 px-6 py-2 text-sm font-medium text-white transition-colors'>
                        Sign Up
                    </Link>
                </div>
            )}

            {/* Mobile Drawer Menu */}
            {isMobileOpen && (
                <div className='border-t bg-white lg:hidden'>
                    <div className='space-y-4 px-4 py-4'>
                        {/* MODIFIED: Mobile Profile Section - When Logged In */}
                        {isUserLogin && (
                            <div className='border-b border-gray-100 pb-4'>
                                <div className='mb-4 flex items-center gap-3'>
                                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 font-medium text-white'>
                                        {userData.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className='font-medium text-gray-900'>{userData.name}</div>
                                        <div className='text-sm text-gray-500'>{userData.email}</div>
                                    </div>
                                </div>

                                {/* Mobile Profile Menu */}
                                <div className='space-y-1'>
                                    {profileMenuItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                                                item.isSignOut
                                                    ? 'text-red-600 hover:bg-red-50'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setIsMobileOpen(false)}>
                                            {getIconSVG(item.icon)}
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mobile Navigation */}
                        {data?.secondNavbar.navlinkes.map((item, i) => (
                            <div key={i}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className='block py-3 text-sm font-medium text-gray-800 transition-colors'
                                        style={{ fontSize: '14px' }}
                                        onClick={() => setIsMobileOpen(false)}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => toggleMenu(i)}
                                            className='flex w-full items-center justify-between py-3 text-sm font-medium text-gray-800 transition-colors'
                                            style={{ fontSize: '14px' }}>
                                            {item.label}
                                            <svg
                                                className={`h-4 w-4 transition-transform duration-200 ${
                                                    activeMenu === i ? 'rotate-180' : ''
                                                }`}
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M19 9l-7 7-7-7'
                                                />
                                            </svg>
                                        </button>
                                        {activeMenu === i && item.submenu && (
                                            <div className='mt-2 space-y-2 border-l-2 border-gray-100 pl-4'>
                                                {item.submenu.map((link, li) => (
                                                    <Link
                                                        key={li}
                                                        href={link.href}
                                                        className='block py-2 text-sm text-gray-600 transition-colors'
                                                        style={{ fontSize: '14px' }}
                                                        onClick={() => setIsMobileOpen(false)}>
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Mobile Language Selector */}
                        <div className='border-t border-gray-100 pt-4'>
                            <p className='mb-3 text-sm font-medium text-gray-800'>Language</p>
                            <div className='grid grid-cols-2 gap-2'>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setSelectedLanguage(lang.code)}
                                        className={`rounded-lg p-2 text-sm transition-colors ${
                                            selectedLanguage === lang.code
                                                ? 'bg-gray-800 text-white'
                                                : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
