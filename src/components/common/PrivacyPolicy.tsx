'use client';

import React from 'react';

import { Calendar, FileText, Mail, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen bg-white text-black'>
            {/* Header Section */}
            <div className='border-b border-gray-200 bg-gray-50'>
                <div className='container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <div className='mb-4 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white'>
                            <Shield className='h-4 w-4' />
                            Legal Document
                        </div>
                        <h1 className='mb-4 text-3xl font-bold text-black md:text-4xl'>Privacy Policy</h1>
                        <div className='flex items-center justify-center gap-2 text-gray-600'>
                            <Calendar className='h-4 w-4' />
                            <span>Last updated: December 2024</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
                {/* Introduction */}
                <div className='mb-12'>
                    <p className='text-lg leading-relaxed text-gray-800'>
                        Diploy ("we," "our," or "us") operates the WAPSaaS platform ("Service") that allows users to
                        easily create and manage their own business websites. This Privacy Policy explains how we
                        collect, use, and protect your information when you use our Service.
                    </p>
                </div>

                {/* Privacy Policy Sections */}
                <div className='space-y-10'>
                    {/* Section 1 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                1
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Information We Collect</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='mb-4 leading-relaxed text-gray-700'>
                                When you use our Service, we may collect the following information:
                            </p>
                            <ul className='space-y-3 text-gray-700'>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Personal Information:</strong> Name, email
                                        address, phone number, billing details.
                                    </div>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Account Information:</strong> Login credentials,
                                        profile details.
                                    </div>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Website Content:</strong> Text, images, and other
                                        material you upload while creating your website.
                                    </div>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Payment Information:</strong> Processed securely
                                        through third-party payment gateways (we do not store sensitive payment
                                        details).
                                    </div>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Usage Data:</strong> IP address, browser type,
                                        device information, and activity logs.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                2
                            </div>
                            <h2 className='text-2xl font-bold text-black'>How We Use Your Information</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='mb-4 leading-relaxed text-gray-700'>We use your information to:</p>
                            <ul className='space-y-3 text-gray-700'>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Provide, operate, and maintain our Service.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Process payments and subscriptions.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Communicate with you about your account, updates, or support.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Personalize and improve the user experience.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Monitor usage, detect fraud, and enhance security.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Comply with legal obligations.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                3
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Sharing of Information</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='mb-4 leading-relaxed text-gray-700'>
                                We do not sell your personal data. However, we may share information with:
                            </p>
                            <ul className='space-y-3 text-gray-700'>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Service Providers:</strong> Hosting providers,
                                        analytics tools, payment processors.
                                    </div>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <div>
                                        <strong className='text-black'>Legal Authorities:</strong> When required to
                                        comply with the law or protect our rights.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                4
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Data Security</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='leading-relaxed text-gray-700'>
                                We implement appropriate technical and organizational measures to protect your
                                information against unauthorized access, loss, or misuse. However, no system is
                                completely secure, and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                5
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Your Rights</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='mb-4 leading-relaxed text-gray-700'>
                                Depending on your location, you may have rights to:
                            </p>
                            <ul className='space-y-3 text-gray-700'>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Access and update your personal data.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Request deletion of your account and related information.</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black'></div>
                                    <span>Opt out of marketing communications.</span>
                                </li>
                            </ul>
                            <p className='mt-4 text-gray-700'>
                                To exercise these rights, please contact us at the email provided below.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                6
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Cookies & Tracking</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='leading-relaxed text-gray-700'>
                                We may use cookies and similar technologies to improve your experience, track usage, and
                                analyze traffic. You can manage cookies through your browser settings.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                7
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Third-Party Links</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='leading-relaxed text-gray-700'>
                                Websites created using our platform may contain links to third-party services. Diploy is
                                not responsible for the privacy practices of such third parties.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                8
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Children's Privacy</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='leading-relaxed text-gray-700'>
                                Our Service is not intended for children under the age of 13 (or relevant age in your
                                jurisdiction). We do not knowingly collect information from children.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                9
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Changes to this Privacy Policy</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='leading-relaxed text-gray-700'>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this
                                page with a revised effective date.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <div className='mb-4 flex items-start gap-3'>
                            <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white'>
                                10
                            </div>
                            <h2 className='text-2xl font-bold text-black'>Contact Us</h2>
                        </div>
                        <div className='ml-11'>
                            <p className='mb-4 leading-relaxed text-gray-700'>
                                If you have any questions about this Privacy Policy or our practices, please contact us:
                            </p>
                            <div className='rounded-lg border border-gray-200 bg-gray-50 p-6'>
                                <div className='flex items-center gap-3'>
                                    <Mail className='h-6 w-6 text-black' />
                                    <div>
                                        <div className='mb-1 text-sm text-gray-600'>Email</div>
                                        <a
                                            href='mailto:wpsaas@diploy.in'
                                            className='font-medium text-black hover:underline'>
                                            wpsaas@diploy.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Note */}
                <div className='mt-16 border-t border-gray-200 pt-8'>
                    <div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
                        <FileText className='h-4 w-4' />
                        <span>This document was last updated in 2025</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
