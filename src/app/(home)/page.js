import React from 'react';
import Banner from '../component/Banner/Banner';
import Platform from '../component/Platform/Platform';
import Info from '../component/Info/Info';
import History from '../component/History/History';
import Fetured from '../component/Fetured/Fetured';
import Recent from '../component/Recent/Recent';
import Team from '../component/Team/Team';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <History></History>
            <Platform></Platform>
            <Fetured></Fetured>
            <Recent></Recent>
            <Team></Team>
        </div>
    );
};

export default Homepage;