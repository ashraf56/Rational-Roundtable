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
    image: "https://images.unsplash.com/photo-1532971291849-92617bf94ded?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    episodeNumber: 2,
    title: "Inspiration Unleashed",
    description: "Discovering sources of inspiration that fuel positive transformation.",
    duration: "25:00",
    releaseDate: "29 November 2023",
    host: "John Doe",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    episodeNumber: 3,
    title: "Navigating Change: A Practical Guide",
    description: "Practical tips and insights on navigating personal and professional changes.",
    duration: "28:00",
    releaseDate: "06 December 2023",
    host: "John Doe",
    image: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    episodeNumber: 4,
    title: "The Ripple Effect: Small Changes, Big Impact",
    description: "Exploring how small actions can lead to significant positive changes in our lives.",
    duration: "32:00",
    releaseDate: "13 December 2023",
    host: "John Doe",
    image: "https://images.unsplash.com/photo-1485955891060-a3318433e95f?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    episodeNumber: 5,
    title: "Embracing Uncertainty",
    description: "How to navigate and find opportunities in times of uncertainty.",
    duration: "27:00",
    releaseDate: "20 December 2023",
    host: "John Doe",
    image: "https://images.unsplash.com/photo-1533173383261-e7c2432af4ec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    episodeNumber: 6,
    title: "The Art of Resilience",
    description: "Building resilience to overcome challenges and setbacks.",
    duration: "31:00",
    releaseDate: "27 December 2023",
    host: "John Doe",
    image: "https://images.unsplash.com/photo-1616627981222-89035e5f5242?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];




const Recent = () => {

  return (
    <div className='item-center flex flex-col  justify-center min-h-[50vh]  my-9 '>
      <h1 className=" text-base md:text-5xl font-bold uppercase text-center  text-white">Recent Episodes</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 justify-center items-center mx-auto py-10 px-10'>
        {
          episodes?.map(p => (
            <div className="card max-w-full h-full bg-base-100 shadow-xl text-white " key={p.title} style={{ backgroundImage: ` linear-gradient(to right , #111111 0%, rgba(17, 17, 17, 0) 100%),url(${p?.image})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100%',objectFit:'contain' }}>
              <div className="card-body">
                <p> Episode {p.episodeNumber}</p>
                <p className='font-bold'> {p.host}</p>
                <h2 className="card-title">{p.title}</h2>
                <p>{p.description}</p>
                <p className='flex  '><span className='px-1'>{p.duration}</span> min</p>

                <p className='font-bold'>{p.releaseDate}</p>
                <div className="card-actions justify-end">
                  <button className='text-4xl justify-center animate-pulse'><FaRegPlayCircle /></button>
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