import Image from 'next/image';
import React from 'react';
import img from '../../../asset/banner2.jpg'
const Banner2 = () => {

    return (
        <div >
            <div className=" flex flex-col items-center place-items-center justify-center min-h-[50vh]   text-white  ">

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto  mt-10 '>
                    <div>
                        <h1 className='  text-base sm:text-6xl uppercase font-extrabold py-3 md:text-right bg-clip-text text-transparent   bg-gradient-to-r from-[#61f4de] to-[#6e78ff]  pe-3 '> Topics</h1>
                    </div>
                    <div>
                        <p className=' text-xs uppercase  pt-2 ' >
                            Exploring Intellectual Horizons <br /> Where Big Ideas Converge with Conciseness <br /> at the Rational Round Table
                        </p>

                    </div>
                </div>

                <div className=' pb-10 pt-5 lg:pt-0'>
                    <Image src={img} width={800} height={100} alt='b' />
                </div>
            </div>

        </div>
    );
};

export default Banner2;