import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
const Banner = () => {
    return (
        <div >     
 <div className="hero min-h-[50vh]  lg:min-h-screen    text-white  " style={{backgroundImage:`url('https://img.freepik.com/free-vector/gradient-black-background-with-realistic-elements_23-2149149460.jpg?w=740&t=st=1700575560~exp=1700576160~hmac=1c943793577ed068142656a2bf7cff0685c0d17590781df2b2e89e47d42c7beb')`}}>
 
  <div className="hero-content text-center " >
    
    <div className="max-w-5xl">
    <h1 className='  text-base md:text-6xl uppercase font-bold py-3 '> The <span className='bg-clip-text text-transparent   bg-gradient-to-r from-[#61f4de] to-[#6e78ff]   '>Rational Round </span>Table clear Minds, Rich Conversations</h1>
<p className=' uppercase ' >
Welcome to Rational Round Table, where big ideas meet brevity. Join us for sharp discussions on today s topics, bringing clarity to complexity. Its the podcast for quick insights and sharp perspectives. Lets dive in!
</p>
<button className='btn text-white uppercase font-bold mt-4 btn-primary '> <FaPlayCircle/> Play now</button>
    </div>
  </div>
</div>          
        </div>
    );
};

export default Banner;