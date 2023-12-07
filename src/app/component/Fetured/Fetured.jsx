import Image from 'next/image';
import React from 'react';
import img from '../../../asset/claus-grunstaudl-dKeB0-M9iiA-unsplash.jpg'
import { FaPlayCircle } from 'react-icons/fa';
const Fetured = () => {
    const imgs='https://th.bing.com/th/id/OIG.fgd5p7JxyQQ6v_y1pLDV?w=1024&h=1024&rs=1&pid=ImgDetMain'
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 text-white">
  <div className="hero-content flex-col lg:flex-row">
  <Image src={imgs} alt='f' width={500} height={600} className='rounded-s-full rounded-t-full max-w-full'></Image>   
   <div>
      <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#ebf4f5] to-[#d3f3f1] '>Featured Epidsode</p>
      <h1 className=" text-base md:text-5xl font-bold">Catalyst Conversations: Igniting Change through Insight</h1>
      <p className="py-6">Join us on Catalyst Conversations, where thought-provoking discussions spark change. Dive into insightful conversations that ignite inspiration and drive transformation. Empower your journey of growth and discovery with us!</p>
      <button className='btn text-white uppercase font-bold mt-4 btn-primary '> <FaPlayCircle/> Play now</button>    </div>
  </div>
</div>
          

        </div>
    );
};

export default Fetured;