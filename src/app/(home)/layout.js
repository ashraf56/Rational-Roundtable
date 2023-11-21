import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const HomeLayout = ({children}) => {
    return (
        <div >
            <div>
             <Navbar></Navbar>   
            </div>

            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;