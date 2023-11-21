import React from 'react';
import Banner from '../component/Banner/Banner';
import Platform from '../component/Platform/Platform';
import Info from '../component/Info/Info';
import History from '../component/History/History';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Platform></Platform>
            <Info></Info>
            <History></History>
        </div>
    );
};

export default Homepage;