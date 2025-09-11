import React from 'react';

import Main from '@/components/Main';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/sections/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
};

export default page;
