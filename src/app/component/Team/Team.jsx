import Image from 'next/image';
import React from 'react';

const people = [
    {
      name: "John Doe",
        image:'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      age: 30,
      occupation: "Software Engineer",
      country: "United States",
    },
    {
      name: "Jane Smith",
      image:'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      age: 25,
      occupation: "Graphic Designer",
      country: "Canada",
    },
    {
      name: "Bob Johnson",
      image:'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      age: 35,
      occupation: "Entrepreneur",
      country: "United Kingdom",
    },
  ];
  

const Team = () => {

    return (
        <div className='hero min-h-[70vh] bg-base-300 '>
            <div className='hero-content flex-col lg:flex-row  '>
                <div>
                <h1 className="text-3xl font-bold px-20 "><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#61f4de] to-[#6e78ff] '>Meet our Team</span></h1>
                </div>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '> 
           
    {
        people.map(({name,age,occupation,country,image})=>(
            <div key={name}>
             
               <div className="card  h-full max-w-full  bg-base-200  shadow-xl  ">
               <div className="avatar ">
  <div className="w-24  rounded-full mx-auto mt-4 ">
<Image src={image} width={300} height={300} alt='profiile' ></Image>
  </div>
</div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>age {age}</p>
    <p>{occupation}</p>
    <p>{country}</p>
    
  </div>
</div>
            </div>
        ))
    }
            </div>

            </div>
       
        </div>
    );
};

export default Team;