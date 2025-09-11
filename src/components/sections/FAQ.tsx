'use client';

import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
    // FAQ Data
    const faqData = [
        {
            id: 'item-1',
            question: 'After getting an eSIM, do I need to turn anything on?',
            answer: "No setup required! Your eSIM activates automatically once installed on your device. Just scan the QR code and you're ready to go."
        },
        {
            id: 'item-2',
            question: 'Does the service detect when I arrive at my destination?',
            answer: 'Yes, absolutely! Our system automatically detects your location and connects you to the local network within minutes of arrival.'
        },
        {
            id: 'item-3',
            question: 'Do I keep my number with an eSIM data plan?',
            answer: 'Your original phone number remains unchanged. eSIM provides data service only and works alongside your existing phone plan.'
        },
        {
            id: 'item-4',
            question: 'Which devices support eSIM technology?',
            answer: 'Most modern smartphones support eSIM including iPhone XS and newer, Google Pixel 3+, Samsung Galaxy S20+, and many others. Check our compatibility list for details.'
        },
        {
            id: 'item-5',
            question: 'Can I use mobile hotspot with my eSIM?',
            answer: 'Yes! You can share your eSIM data connection with other devices through mobile hotspot. Data usage will count towards your plan limits.'
        },
        {
            id: 'item-6',
            question: 'What if I need more data during my trip?',
            answer: 'Easy! Purchase additional data top-ups instantly through our app, or upgrade to a larger plan anytime during your travels.'
        }
    ];

    return (
        <section className='bg-gray-50 py-16 lg:py-20'>
            <div className='container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl'>
                        Frequently asked questions
                    </h2>

                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Everything you need to know about eSIM setup, compatibility, and usage. Still have questions?
                        We're here to help.
                    </p>
                </div>

                {/* FAQ Items - Each Separate with Gaps */}
                <div className='space-y-4'>
                    {faqData.map((faq) => (
                        <div
                            key={faq.id}
                            className='rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md'>
                            <Accordion type='single' collapsible className='w-full'>
                                <AccordionItem value={faq.id} className='border-none'>
                                    <AccordionTrigger className='px-6 py-5 text-left transition-colors hover:no-underline [&[data-state=open]]:text-blue-600'>
                                        <span className='pr-4 text-base leading-relaxed font-semibold text-gray-900 md:text-lg'>
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>

                                    <AccordionContent className='px-6 pb-5'>
                                        <div className='pt-2'>
                                            <p className='leading-relaxed text-gray-700'>{faq.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
