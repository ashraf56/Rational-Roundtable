import React from 'react';
import Banner from '../component/Banner/Banner';
import Platform from '../component/Platform/Platform';
import Info from '../component/Info/Info';
import History from '../component/History/History';
import Fetured from '../component/Fetured/Fetured';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Fetured></Fetured>
            <Platform></Platform>
            <Info></Info>
            <History></History>
        </div>
    );
};

export default Homepage;