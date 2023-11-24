import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const Episode = () => {
    return (
        <div>
             <div className="hero min-h-[70vh]   text-white  " style={{backgroundImage:`url('https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148909921.jpg?w=740&t=st=1700733046~exp=1700733646~hmac=6a65882a3eeda2e872e384f8e3fc681d283bb7fb405f599a8a56c0687a2313a0')`}}>
 
 <div className="hero-content text-center " >
   
   <div className="max-w-5xl">
   <h1 className='  text-base md:text-6xl uppercase font-bold py-3 '>  <span className='  '>Play All Episode</span></h1>
<p className=' uppercase ' >

</p>
<button className='btn text-white uppercase font-bold mt-4 btn-primary '> <FaPlayCircle/> Play now</button>
   </div>
 </div>
</div>          
        </div>
    );
};

export default Episode;