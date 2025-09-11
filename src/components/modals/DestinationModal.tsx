'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { Search } from 'lucide-react';

interface Destination {
    id: string;
    name: string;
    country: string;
    flag: string;
    description?: string;
}

interface DestinationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (destination: string) => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ isOpen, onClose, onSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);

    const destinations: Destination[] = [
        { id: '1', name: 'New York', country: 'United States', flag: '🇺🇸', description: 'The Big Apple' },
        { id: '2', name: 'London', country: 'United Kingdom', flag: '🇬🇧', description: 'Historic city' },
        { id: '3', name: 'Tokyo', country: 'Japan', flag: '🇯🇵', description: 'Modern metropolis' },
        { id: '4', name: 'Paris', country: 'France', flag: '🇫🇷', description: 'City of Light' },
        { id: '5', name: 'Dubai', country: 'UAE', flag: '🇦🇪', description: 'Modern oasis' },
        { id: '6', name: 'Singapore', country: 'Singapore', flag: '🇸🇬', description: 'Garden city' },
        { id: '7', name: 'Sydney', country: 'Australia', flag: '🇦🇺', description: 'Harbor city' },
        { id: '8', name: 'Mumbai', country: 'India', flag: '🇮🇳', description: 'Bollywood hub' },
        { id: '9', name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', description: 'Cultural gem' },
        { id: '10', name: 'Berlin', country: 'Germany', flag: '🇩🇪', description: 'Historical city' },
        { id: '11', name: 'Madrid', country: 'Spain', flag: '🇪🇸', description: 'Royal city' },
        { id: '12', name: 'Rome', country: 'Italy', flag: '🇮🇹', description: 'Eternal city' }
    ];

    // Filter destinations based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredDestinations(destinations);
        } else {
            const filtered = destinations.filter(
                (dest) =>
                    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredDestinations(filtered);
        }
    }, [searchQuery]);

    // Reset search when modal opens
    useEffect(() => {
        if (isOpen) {
            setSearchQuery('');
            setFilteredDestinations(destinations);
        }
    }, [isOpen]);

    const handleSelectDestination = (destination: Destination) => {
        onSelect(`${destination.name}, ${destination.country}`);
        onClose();
        setSearchQuery('');
    };

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className='max-h-[90vh] max-w-lg gap-0 p-0'>
                <DialogHeader className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <DialogTitle className='text-xl font-bold text-gray-900'>
                                Select Your Destination
                            </DialogTitle>
                            <DialogDescription className='mt-1 text-sm text-gray-600'>
                                Choose where you need mobile data
                            </DialogDescription>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className='relative mt-4'>
                        <Search className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                        <Input
                            type='text'
                            placeholder='Search destinations...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='h-12 pl-10'
                            autoFocus
                        />
                    </div>
                </DialogHeader>

                {/* Modal Body */}
                <div className='max-h-80 overflow-y-auto px-2'>
                    {filteredDestinations.length > 0 ? (
                        <div className='space-y-1 p-2'>
                            {filteredDestinations.map((dest) => (
                                <Button
                                    key={dest.id}
                                    variant='ghost'
                                    onClick={() => handleSelectDestination(dest)}
                                    className='h-auto w-full justify-start border border-transparent p-4 hover:border-blue-200 hover:bg-blue-50'>
                                    <div className='flex w-full items-center gap-4'>
                                        <div className='flex-shrink-0'>
                                            <span className='text-2xl'>{dest.flag}</span>
                                        </div>
                                        <div className='flex-1 text-left'>
                                            <p className='text-base font-semibold text-gray-900'>{dest.name}</p>
                                            <p className='text-sm text-gray-600'>{dest.country}</p>
                                            {dest.description && (
                                                <p className='mt-1 text-xs text-gray-500'>{dest.description}</p>
                                            )}
                                        </div>
                                        <div className='flex-shrink-0'>
                                            <svg
                                                className='h-4 w-4 text-gray-400'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M9 5l7 7-7 7'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <div className='p-12 text-center'>
                            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                                <Search className='h-8 w-8 text-gray-400' />
                            </div>
                            <h3 className='mb-2 text-lg font-medium text-gray-900'>No destinations found</h3>
                            <p className='text-gray-500'>Try adjusting your search terms or check spelling.</p>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className='border-t border-gray-200 bg-gray-50 p-4'>
                    <div className='flex items-center justify-between text-sm text-gray-600'>
                        <span>💡 Tip: Search by city or country name</span>
                        <span>{filteredDestinations.length} destinations</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DestinationModal;
