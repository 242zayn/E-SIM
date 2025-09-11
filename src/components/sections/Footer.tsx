import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t border-gray-200 bg-white'>
            <div className='container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
                {/* Top Section - Logo and App Download */}
                <div className='mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-center'>
                    {/* Logo Section */}
                    <div className='mb-8 lg:mb-0'>
                        <div className='flex items-center'>
                            <h1 className='text-3xl font-bold text-gray-900'>
                                eSIM
                                <span className='mt-1 block text-sm font-normal text-gray-500'>
                                    Global Connectivity
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* App Download Buttons */}
                    <div className='flex gap-4'>
                        <Link href='#' className='block'>
                            <div className='flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800'>
                                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                                </svg>
                                <div className='text-left'>
                                    <div className='text-xs'>Download on the</div>
                                    <div className='text-sm font-semibold'>App Store</div>
                                </div>
                            </div>
                        </Link>

                        <Link href='#' className='block'>
                            <div className='flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800'>
                                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                                </svg>
                                <div className='text-left'>
                                    <div className='text-xs'>GET IT ON</div>
                                    <div className='text-sm font-semibold'>Google Play</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
                    {/* Popular Destinations */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Popular Destinations</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Greece
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Spain
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Italy
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Turkey
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    France
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Portugal
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    India
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Canada
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    China
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    United Kingdom
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Company</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Business
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Refer a Friend
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Become an Affiliate
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Student Discount
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* eSIM */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-gray-900'>eSIM</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    What is an eSIM
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Supported Devices
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Download App
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Security Features
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Data Usage Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Help</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Getting Started
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Plans and Payments
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Troubleshooting
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-gray-900'>Follow Us</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                                    </svg>
                                    Twitter (now X)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
                                    </svg>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                    </svg>
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                                    </svg>
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z' />
                                    </svg>
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
                                    <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.003.028-.008.055-.011.084-.144.946-1.095 1.911-2.035 1.911-.338 0-.676-.095-.965-.251-.289-.156-.527-.374-.706-.644-.179.27-.417.488-.706.644-.289.156-.627.251-.965.251-.94 0-1.891-.965-2.035-1.911-.003-.029-.008-.056-.011-.084-.144-.946.195-1.911 1.134-1.911.338 0 .676.095.965.251.289.156.527.374.706.644.179-.27.417-.488.706-.644.289-.156.627-.251.965-.251.939 0 1.278.965 1.134 1.911z' />
                                    </svg>
                                    Reddit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-200 pt-8'>
                    <div className='flex flex-col items-center justify-between lg:flex-row'>
                        {/* Copyright and Legal Links */}
                        <div className='mb-4 flex flex-col items-center gap-4 sm:flex-row lg:mb-0'>
                            <p className='text-sm text-gray-600'>2025 eSIM Global. All rights reserved.</p>
                            <div className='flex items-center gap-4 text-sm'>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Privacy Policy
                                </Link>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Terms of Service
                                </Link>
                                <Link href='#' className='text-gray-600 transition-colors hover:text-gray-900'>
                                    Cookie Preference
                                </Link>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className='flex items-center gap-2'>
                            <span className='mr-2 text-sm text-gray-600'>We accept:</span>
                            <div className='flex items-center gap-2'>
                                <div className='rounded bg-gray-100 p-1'>
                                    <svg className='h-5 w-8' viewBox='0 0 32 20' fill='none'>
                                        <rect width='32' height='20' rx='4' fill='#1A1F71' />
                                        <path d='M6.5 7.5H12.5V12.5H6.5V7.5Z' fill='white' />
                                    </svg>
                                </div>
                                <div className='rounded bg-gray-100 p-1'>
                                    <svg className='h-5 w-8' viewBox='0 0 32 20' fill='none'>
                                        <rect width='32' height='20' rx='4' fill='#EB001B' />
                                        <rect x='12' y='0' width='20' height='20' rx='4' fill='#FF5F00' />
                                    </svg>
                                </div>
                                <div className='rounded bg-gray-100 p-1'>
                                    <svg className='h-5 w-8' viewBox='0 0 32 20' fill='none'>
                                        <rect width='32' height='20' rx='4' fill='#0070BA' />
                                    </svg>
                                </div>
                                <div className='rounded bg-gray-100 p-1'>
                                    <svg className='h-5 w-8' viewBox='0 0 32 20' fill='none'>
                                        <rect width='32' height='20' rx='4' fill='#00A86B' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
