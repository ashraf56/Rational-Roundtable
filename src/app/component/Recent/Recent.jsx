import Image from 'next/image';
import React from 'react';
import { FaClock, FaGooglePlay, FaPlayCircle, FaRegPlayCircle, FaRegTimesCircle } from 'react-icons/fa';


const episodes = [
    {
      episodeNumber: 1,
      title: "The Power of Transformation",
      description: "Exploring the catalysts that drive personal and societal change.",
      duration: "30:00",
      releaseDate: "2023-11-22",
      host: "Your Name",
      image: "https://th.bing.com/th/id/OIG.teLGSyfW9Hh9oMSiGRSE?pid=ImgGn", // Replace with the actual URL of the episode image
    },
    {
      episodeNumber: 2,
      title: "Inspiration Unleashed",
      description: "Discovering sources of inspiration that fuel positive transformation.",
      duration: "25:00",
      releaseDate: "2023-11-29",
      host: "Your Name",
      image: "https://th.bing.com/th/id/OIG.35bt63SOkIwTYAMEb_iy?pid=ImgGn", // Replace with the actual URL of the episode image
    },
    {
      episodeNumber: 3,
      title: "Navigating Change: A Practical Guide",
      description: "Practical tips and insights on navigating personal and professional changes.",
      duration: "28:00",
      releaseDate: "2023-12-06",
      host: "Your Name",
      image: "https://th.bing.com/th/id/OIG.6OeA4U90D.rQ9i.N4GWt?w=1024&h=1024&rs=1&pid=ImgDetMain", // Replace with the actual URL of the episode image
    },
    {
      episodeNumber: 4,
      title: "The Ripple Effect: Small Changes, Big Impact",
      description: "Exploring how small actions can lead to significant positive changes in our lives.",
      duration: "32:00",
      releaseDate: "2023-12-13",
      host: "Your Name",
      image: "https://th.bing.com/th/id/OIG.35bt63SOkIwTYAMEb_iy?pid=ImgGn", // Replace with the actual URL of the episode image
    },
    {
        episodeNumber: 5,
        title: "Embracing Uncertainty",
        description: "How to navigate and find opportunities in times of uncertainty.",
        duration: "27:00",
        releaseDate: "2023-12-20",
        host: "Your Name",
        image: "https://th.bing.com/th/id/OIG.OQE7BkAWQaP68nr6_YA0?pid=ImgGn", // Replace with the actual URL of the episode image
      },
      {
        episodeNumber: 6,
        title: "The Art of Resilience",
        description: "Building resilience to overcome challenges and setbacks.",
        duration: "31:00",
        releaseDate: "2023-12-27",
        host: "Your Name",
        image: "https://th.bing.com/th/id/OIG.daEMkeE28PnOflfVYu.T?pid=ImgGn", // Replace with the actual URL of the episode image
      },
  ];
  
  
  

const Recent = () => {

    return (
        <div className='item-center flex flex-col  justify-center min-h-[50vh]  my-9 '>
            <h1 className=" text-base md:text-5xl font-bold uppercase text-center">Recent Episodes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-2 justify-center items-center mx-auto py-10'>
                {
                    episodes.map(p => (
<div className="card w-96 h-full bg-base-100 shadow-xl text-white " key={p.title} style={{backgroundImage:` linear-gradient(to right , #111111 0%, rgba(17, 17, 17, 0) 100%),url(${p.image})`, backgroundPosition:'center', backgroundSize:'cover', height:'100%',   }}>
  <div className="card-body">
   
    <h2 className="card-title">{p.title}</h2>
    <p>{p.description}</p>
    <p className='flex  '><FaClock /> <span className='px-1'>{p.duration}</span> M</p>
    <p> {p.episodeNumber}</p>
    <p>{p.host}</p>
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

export default Recent;