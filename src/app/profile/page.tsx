import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import {
    Activity,
    BarChart3,
    Bell,
    CreditCard,
    Download,
    Gift,
    Globe,
    Package,
    Settings,
    Shield,
    Smartphone,
    Star,
    Trophy,
    Users,
    Wallet
} from 'lucide-react';

const ProfileOverviewPage = () => {
    // Quick stats
    const quickStats = [
        { label: 'Active Plans', value: '3', icon: Smartphone, color: 'bg-blue-500' },
        { label: 'Countries Visited', value: '12', icon: Globe, color: 'bg-green-500' },
        { label: 'Total Savings', value: '$247', icon: Wallet, color: 'bg-purple-500' },
        { label: 'Referral Points', value: '1,250', icon: Trophy, color: 'bg-orange-500' }
    ];

    // Recent activity
    const recentActivity = [
        { action: 'Purchased Europe eSIM Plan', time: '2 hours ago', icon: Package },
        { action: 'Updated payment method', time: '1 day ago', icon: CreditCard },
        { action: 'Referred friend successfully', time: '3 days ago', icon: Gift },
        { action: 'Added trusted device', time: '1 week ago', icon: Shield }
    ];

    return (
        <div className='space-y-8'>
            {/* Quick Stats Section */}
            <div>
                <div className='mb-6 flex items-center gap-2'>
                    <BarChart3 className='h-6 w-6 text-gray-700' />
                    <h2 className='text-2xl font-bold text-gray-900'>Overview</h2>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {quickStats.map((stat, index) => (
                        <Card key={index} className='transition-shadow duration-200 hover:shadow-lg'>
                            <CardContent className='p-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <div className='mb-1 text-2xl font-bold text-gray-900'>{stat.value}</div>
                                        <div className='text-sm text-gray-600'>{stat.label}</div>
                                    </div>
                                    <div
                                        className={`h-12 w-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                                        <stat.icon className='h-6 w-6 text-white' />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Account Management Section */}
            <div>
                <div className='mb-6 flex items-center gap-2'>
                    <Shield className='h-6 w-6 text-gray-700' />
                    <h2 className='text-2xl font-bold text-gray-900'>Account Security</h2>
                </div>
                <div className='grid gap-6 md:grid-cols-2'>
                    {/* Security Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Security Status</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='flex items-center justify-between border-b py-3'>
                                <div className='flex items-center gap-3'>
                                    <Shield className='h-5 w-5 text-green-500' />
                                    <div>
                                        <div className='font-medium'>Two-Factor Auth</div>
                                        <div className='text-sm text-gray-500'>Enabled</div>
                                    </div>
                                </div>
                                <Badge className='bg-green-100 text-green-700'>Active</Badge>
                            </div>
                            <div className='flex items-center justify-between border-b py-3'>
                                <div className='flex items-center gap-3'>
                                    <Shield className='h-5 w-5 text-blue-500' />
                                    <div>
                                        <div className='font-medium'>Phone Verification</div>
                                        <div className='text-sm text-gray-500'>Verified</div>
                                    </div>
                                </div>
                                <Badge className='bg-blue-100 text-blue-700'>Verified</Badge>
                            </div>
                            <div className='flex items-center justify-between py-3'>
                                <div className='flex items-center gap-3'>
                                    <Shield className='h-5 w-5 text-green-500' />
                                    <div>
                                        <div className='font-medium'>Email Verification</div>
                                        <div className='text-sm text-gray-500'>Verified</div>
                                    </div>
                                </div>
                                <Badge className='bg-green-100 text-green-700'>Verified</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-3'>
                            <Button className='w-full justify-start' variant='outline'>
                                <Settings className='mr-3 h-4 w-4' />
                                Change Password
                            </Button>
                            <Button className='w-full justify-start' variant='outline'>
                                <Bell className='mr-3 h-4 w-4' />
                                Notification Settings
                            </Button>
                            <Button className='w-full justify-start' variant='outline'>
                                <Shield className='mr-3 h-4 w-4' />
                                Privacy Settings
                            </Button>
                            <Button className='w-full justify-start' variant='outline'>
                                <Download className='mr-3 h-4 w-4' />
                                Download My Data
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Activity Section */}
            <div>
                <div className='mb-6 flex items-center gap-2'>
                    <Activity className='h-6 w-6 text-gray-700' />
                    <h2 className='text-2xl font-bold text-gray-900'>Recent Activity</h2>
                </div>
                <div className='grid gap-6 md:grid-cols-2'>
                    {/* Recent Activity */}
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Latest Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-4'>
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className='flex items-start gap-4 border-b py-3 last:border-0'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100'>
                                            <activity.icon className='h-5 w-5 text-gray-600' />
                                        </div>
                                        <div className='min-w-0 flex-1'>
                                            <div className='mb-1 font-medium text-gray-900'>{activity.action}</div>
                                            <div className='text-sm text-gray-500'>{activity.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Separator className='my-4' />
                            <Button variant='outline' className='w-full'>
                                View All Activity
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Membership Benefits */}
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Membership Benefits</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='flex items-center justify-between border-b py-3'>
                                <div className='flex items-center gap-3'>
                                    <Star className='h-5 w-5 text-yellow-500' />
                                    <span className='font-medium'>Gold Member Discount</span>
                                </div>
                                <span className='font-medium text-green-600'>15% OFF</span>
                            </div>
                            <div className='flex items-center justify-between border-b py-3'>
                                <div className='flex items-center gap-3'>
                                    <Gift className='h-5 w-5 text-purple-500' />
                                    <span className='font-medium'>Referral Bonus</span>
                                </div>
                                <span className='font-medium text-green-600'>$25</span>
                            </div>
                            <div className='flex items-center justify-between border-b py-3'>
                                <div className='flex items-center gap-3'>
                                    <Users className='h-5 w-5 text-blue-500' />
                                    <span className='font-medium'>Priority Support</span>
                                </div>
                                <Badge className='bg-blue-100 text-blue-700'>Active</Badge>
                            </div>
                            <div className='flex items-center justify-between py-3'>
                                <div className='flex items-center gap-3'>
                                    <Globe className='h-5 w-5 text-green-500' />
                                    <span className='font-medium'>Global Roaming</span>
                                </div>
                                <Badge className='bg-green-100 text-green-700'>Included</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfileOverviewPage;
