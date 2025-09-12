import React from 'react';

import FAQ from './sections/FAQ';
import Hero from './sections/Hero';
import TravelDestinationTabs from './sections/TravelDestinationTabs';
import WhatIsEsim from './sections/WhatIsEsim';
import WhyChoose from './sections/WhyChoose';

const Main = () => {
    return (
        <div>
            <Hero />
            <WhatIsEsim />
            <TravelDestinationTabs />
            <WhyChoose />
            <FAQ />
        </div>
    );
};

export default Main;
