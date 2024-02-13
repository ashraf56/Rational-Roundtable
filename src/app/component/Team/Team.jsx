import Image from 'next/image';
import React from 'react';

const people = [
  {
    name: "John Doe",
    image: 'https://images.unsplash.com/photo-1568555013133-1a59503c7667?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    age: 30,
    occupation: "Software Engineer",
    country: "United States",
  },
  {
    name: "Jane Smith",
    image: 'https://images.unsplash.com/photo-1544808700-f3cff318fab7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    age: 25,
    occupation: "Graphic Designer",
    country: "Canada",
  },
  {
    name: "Bob Johnson",
    image: 'https://images.unsplash.com/photo-1613966637770-4318b429b3d3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    age: 35,
    occupation: "Entrepreneur",
    country: "United Kingdom",
  },
];


const Team = () => {

  return (
    <div className='hero min-h-[80vh] bg-base-300 '>
      <div className='hero-content flex-col lg:flex-row  '>
        <div>
          <h1 className="text-4xl font-bold px-20 "><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#61f4de] to-[#6e78ff] '>Meet our Team</span></h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>

          {
            people.map(({ name, age, occupation, country, image }) => (
              <div key={name}>

                <div className="card  h-full max-w-full  bg-base-200  shadow-xl  ">
                  <div className="avatar ">
                    <div className="w-full rounded-b-3xl px-2  mx-auto  ">
                      <Image src={image} width={300} height={300} alt='profiile' ></Image>
                    </div>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>age {age}</p>
                    <p>{occupation}</p>
                    <p className='font-semibold'>{country}</p>

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