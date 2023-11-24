import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';


const episodes = [
  {
    episodeNumber: 1,
    title: "The Power of Transformation",
    description: "Exploring the catalysts that drive personal and societal change.",
    duration: "30:00",
    releaseDate: "22 November 2023",
    host: "John Doe",
    image: "https://th.bing.com/th/id/OIG.teLGSyfW9Hh9oMSiGRSE?pid=ImgGn",
  },
  {
    episodeNumber: 2,
    title: "Inspiration Unleashed",
    description: "Discovering sources of inspiration that fuel positive transformation.",
    duration: "25:00",
    releaseDate: "29 November 2023",
    host: "John Doe", 
    image: "https://th.bing.com/th/id/OIG.35bt63SOkIwTYAMEb_iy?pid=ImgGn",
  },
  {
    episodeNumber: 3,
    title: "Navigating Change: A Practical Guide",
    description: "Practical tips and insights on navigating personal and professional changes.",
    duration: "28:00",
    releaseDate: "06 December 2023",
    host: "John Doe", 
    image: "https://th.bing.com/th/id/OIG.6OeA4U90D.rQ9i.N4GWt?w=1024&h=1024&rs=1&pid=ImgDetMain",
  },
  {
    episodeNumber: 4,
    title: "The Ripple Effect: Small Changes, Big Impact",
    description: "Exploring how small actions can lead to significant positive changes in our lives.",
    duration: "32:00",
    releaseDate: "13 December 2023",
    host: "John Doe", 
    image: "https://th.bing.com/th/id/OIG.35bt63SOkIwTYAMEb_iy?pid=ImgGn",
  },
  {
    episodeNumber: 5,
    title: "Embracing Uncertainty",
    description: "How to navigate and find opportunities in times of uncertainty.",
    duration: "27:00",
    releaseDate: "20 December 2023",
    host: "John Doe", 
    image: "https://th.bing.com/th/id/OIG.OQE7BkAWQaP68nr6_YA0?pid=ImgGn",
  },
  {
    episodeNumber: 6,
    title: "The Art of Resilience",
    description: "Building resilience to overcome challenges and setbacks.",
    duration: "31:00",
    releaseDate: "27 December 2023",
    host: "John Doe", 
    image: "https://th.bing.com/th/id/OIG.daEMkeE28PnOflfVYu.T?pid=ImgGn",
  },
];

  
  

const Allepisodes = () => {

    return (
        <div className='item-center flex flex-col  justify-center min-h-[50vh]  my-9 '>
                     <h1 className=" text-base md:text-xl font-bold uppercase px-20 text-white ">All Episodes</h1>
            <hr className='horizontal w-96  mx-20  hidden lg:block' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 justify-center items-center mx-auto py-10 px-10'>
                {
                    episodes.map(p => (
<div className="card max-w-full h-full bg-base-100 shadow-xl text-white " key={p.title} style={{backgroundImage:` linear-gradient(to right , #111111 0%, rgba(17, 17, 17, 0) 100%),url(${p.image})`, backgroundPosition:'center', backgroundSize:'cover', height:'100%',   }}>
  <div className="card-body">
  <p> Episode {p.episodeNumber}</p>
  <p className='font-bold'> {p.host}</p>
    <h2 className="card-title">{p.title}</h2>
    <p>{p.description}</p>
    <p className='flex  '><span className='px-1'>{p.duration}</span> h</p>
    
    <p className='font-bold'>{p.releaseDate}</p>
    <div className="card-actions justify-end">
         <button className='text-5xl justify-center '><FaRegPlayCircle/></button>
    </div>
  </div>
</div>

                    ))
                }
            </div>
        </div>
    );
};

export default Allepisodes;