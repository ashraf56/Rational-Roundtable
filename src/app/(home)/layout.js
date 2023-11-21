import React from 'react';
import Navbar from '../component/Navbar/Navbar';

const HomeLayout = ({children}) => {
    return (
        <div>
            <div className='mx-auto  container'>
             <Navbar></Navbar>   
            </div>

            <main>{children}</main>
        </div>
    );
};

export default HomeLayout;