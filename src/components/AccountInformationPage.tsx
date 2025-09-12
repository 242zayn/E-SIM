'use client';

import React, { useState } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import {
    AlertTriangle,
    Camera,
    CheckCircle,
    Clock,
    FileText,
    Globe,
    Mail,
    MapPin,
    Trash2,
    Upload,
    User,
    XCircle
} from 'lucide-react';

const AccountInformationPage = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [kycStatus, setKycStatus] = useState<'pending' | 'verified' | 'rejected'>('pending');

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const getKycStatusBadge = () => {
        switch (kycStatus) {
            case 'verified':
                return (
                    <Badge className='bg-green-100 text-green-700'>
                        <CheckCircle className='mr-1 h-3 w-3' />
                        Verified
                    </Badge>
                );
            case 'rejected':
                return (
                    <Badge className='bg-red-100 text-red-700'>
                        <XCircle className='mr-1 h-3 w-3' />
                        Rejected
                    </Badge>
                );
            default:
                return (
                    <Badge className='bg-yellow-100 text-yellow-700'>
                        <Clock className='mr-1 h-3 w-3' />
                        Pending
                    </Badge>
                );
        }
    };

    return (
        <div className='space-y-8'>
            <div className='mb-6 flex items-center gap-2'>
                <User className='h-6 w-6 text-gray-700' />
                <h2 className='text-2xl font-bold text-gray-900'>Account Information</h2>
            </div>

            {/* Profile Information */}
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <User className='h-5 w-5' />
                        Profile Information
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                    {/* Profile Picture */}
                    <div className='flex items-center gap-6'>
                        <div className='relative'>
                            <div className='h-24 w-24 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100'>
                                {profileImage ? (
                                    <img src={profileImage} alt='Profile' className='h-full w-full object-cover' />
                                ) : (
                                    <div className='flex h-full w-full items-center justify-center'>
                                        <User className='h-10 w-10 text-gray-400' />
                                    </div>
                                )}
                            </div>
                            <label
                                htmlFor='profile-upload'
                                className='absolute -right-2 -bottom-2 cursor-pointer rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700'>
                                <Camera className='h-4 w-4' />
                            </label>
                            <input
                                id='profile-upload'
                                type='file'
                                accept='image/*'
                                className='hidden'
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-900'>Sarvesh Sharma</h3>
                            <p className='text-sm text-gray-600'>Member since March 2024</p>
                            <Button variant='outline' size='sm' className='mt-2'>
                                <Upload className='mr-2 h-4 w-4' />
                                Change Photo
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Basic Information Grid */}
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <div className='space-y-2'>
                            <Label>Full Name</Label>
                            <div className='flex items-center gap-2'>
                                <User className='h-4 w-4 text-gray-400' />
                                <Input defaultValue='Sarvesh Sharma' />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Label>Email Address</Label>
                            <div className='flex items-center gap-2'>
                                <Mail className='h-4 w-4 text-gray-400' />
                                <Input defaultValue='sarvesh.sharma@esimtel.com' className='flex-1' />
                                <Badge className='bg-green-100 text-green-700'>Verified</Badge>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Label>Country</Label>
                            <div className='flex items-center gap-2'>
                                <MapPin className='h-4 w-4 text-gray-400' />
                                <Input defaultValue='India' />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Label>Currency</Label>
                            <div className='flex items-center gap-2'>
                                <Globe className='h-4 w-4 text-gray-400' />
                                <Input defaultValue='INR (₹)' />
                            </div>
                        </div>
                    </div>

                    {/* KYC Status */}
                    <div className='space-y-2'>
                        <Label>KYC Status</Label>
                        <div className='flex items-center justify-between rounded-lg border border-gray-200 p-4'>
                            <div className='flex items-center gap-3'>
                                <FileText className='h-5 w-5 text-gray-400' />
                                <div>
                                    <div className='font-medium text-gray-900'>Know Your Customer (KYC)</div>
                                    <div className='text-sm text-gray-500'>Identity verification status</div>
                                </div>
                            </div>
                            {getKycStatusBadge()}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <Button className='flex items-center gap-2'>
                            <User className='h-4 w-4' />
                            Update Profile
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Complete KYC Section */}
            {kycStatus !== 'verified' && (
                <Card className='border-blue-200 bg-blue-50'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2 text-blue-700'>
                            <FileText className='h-5 w-5' />
                            Complete Your KYC Verification
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='rounded-lg border border-blue-200 bg-white p-6'>
                            <div className='flex items-start gap-4'>
                                <div className='rounded-full bg-blue-100 p-3'>
                                    <FileText className='h-6 w-6 text-blue-600' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='mb-2 text-lg font-semibold text-blue-900'>Verify Your Identity</h3>
                                    <p className='mb-4 text-blue-700'>
                                        Complete your KYC verification to unlock all features and increase your
                                        transaction limits.
                                    </p>

                                    <div className='mb-4 space-y-3'>
                                        <h4 className='font-medium text-blue-900'>Required Documents:</h4>
                                        <ul className='list-inside list-disc space-y-1 text-sm text-blue-800'>
                                            <li>Government-issued Photo ID (Passport, Driving License, Aadhaar)</li>
                                            <li>Proof of Address (Utility Bill, Bank Statement)</li>
                                            <li>Recent Photograph (Selfie)</li>
                                        </ul>
                                    </div>

                                    <div className='mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4'>
                                        <h4 className='mb-2 font-medium text-blue-900'>Benefits after KYC:</h4>
                                        <ul className='list-inside list-disc space-y-1 text-sm text-blue-800'>
                                            <li>Higher transaction limits</li>
                                            <li>Access to premium plans</li>
                                            <li>Priority customer support</li>
                                            <li>Enhanced account security</li>
                                        </ul>
                                    </div>

                                    <div className='flex gap-3'>
                                        <Button className='bg-blue-600 hover:bg-blue-700'>
                                            <FileText className='mr-2 h-4 w-4' />
                                            Start KYC Process
                                        </Button>
                                        <Button variant='outline' className='border-blue-200 text-blue-700'>
                                            Upload Documents
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Danger Zone - Delete Account */}
            <Card className='border-red-200'>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-red-700'>
                        <AlertTriangle className='h-5 w-5' />
                        Danger Zone
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                    <div className='rounded-lg border border-red-200 bg-red-50 p-6'>
                        <div className='flex items-start gap-4'>
                            <Trash2 className='mt-1 h-6 w-6 text-red-600' />
                            <div className='flex-1'>
                                <h3 className='mb-2 text-lg font-semibold text-red-900'>Delete Account</h3>
                                <p className='mb-4 leading-relaxed text-red-700'>
                                    You can delete your account permanently.{' '}
                                    <strong>
                                        Note that this process can take a while and can't be undone after completion.
                                    </strong>
                                </p>
                                <div className='mb-4 rounded-lg border border-red-200 bg-red-100 p-4'>
                                    <h4 className='mb-2 font-medium text-red-900'>
                                        What happens when you delete your account:
                                    </h4>
                                    <ul className='list-inside list-disc space-y-1 text-sm text-red-800'>
                                        <li>All your personal data will be permanently removed</li>
                                        <li>Active eSIM plans will be deactivated</li>
                                        <li>Order history and transaction records will be deleted</li>
                                        <li>You'll lose access to all membership benefits</li>
                                        <li>This action cannot be undone</li>
                                    </ul>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant='destructive' className='flex items-center gap-2'>
                                            <Trash2 className='h-4 w-4' />
                                            DELETE ACCOUNT
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className='flex items-center gap-2 text-red-700'>
                                                <AlertTriangle className='h-5 w-5' />
                                                Are you absolutely sure?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription className='space-y-3 text-left'>
                                                <p>
                                                    This action cannot be undone. This will permanently delete your
                                                    account and remove all your data from our servers.
                                                </p>
                                                <div className='rounded-lg border border-red-200 bg-red-50 p-4'>
                                                    <p className='font-medium text-red-800'>You will lose:</p>
                                                    <ul className='mt-2 list-inside list-disc space-y-1 text-sm text-red-700'>
                                                        <li>All active eSIM plans</li>
                                                        <li>Account balance and rewards</li>
                                                        <li>Order history</li>
                                                        <li>Membership benefits</li>
                                                    </ul>
                                                </div>
                                                <p className='text-sm text-gray-600'>
                                                    Type <strong>"DELETE MY ACCOUNT"</strong> below to confirm:
                                                </p>
                                                <Input placeholder='Type: DELETE MY ACCOUNT' className='font-mono' />
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction className='bg-red-600 hover:bg-red-700'>
                                                Yes, delete my account
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountInformationPage;
