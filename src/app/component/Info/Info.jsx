import React from 'react';
import img from '../../../asset/black-standing-microphone-studio.jpg'
import Image from 'next/image';

const Info = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

<Image src={img} width={400} height={300} alt='picture' className='rounded-xl'/>

    <div>
      <h1 className="text-5xl font-bold "><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#61f4de] to-[#6e78ff] '>What is Podcast ?</span></h1>
      <p className="py-6">A podcast is a digital audio or video file that is available for streaming or downloading on the internet. It typically takes the form of a series of episodes, and users can subscribe to a podcast to receive new content automatically. Podcasts cover a wide range of topics, including news, education, entertainment, storytelling, and more.</p>
      <p>Unlike traditional radio or television shows, podcasts offer a convenient and on-demand way for listeners to consume content. Users can access podcasts through various platforms and apps, such as Apple Podcasts, Spotify, Google Podcasts, and more. Podcast creators, often referred to as podcasters, produce and distribute episodes, sharing their insights, stories, interviews, or discussions with a global audience.</p>
      <p>Podcasting provides a unique and accessible medium for individuals and organizations to share their perspectives, expertise, and creativity. Listeners can enjoy podcasts while commuting, exercising, or engaging in other activities, making it a versatile and popular form of media consumption in todays digital age. Whether youre interested in learning something new, staying updated on current events, or simply being entertained, theres likely a podcast out there that caters to your interests.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Info;