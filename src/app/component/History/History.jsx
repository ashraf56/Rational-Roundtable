import React from 'react';
import img from '../../../asset/Rational Roundtable-logos.jpeg'
import Image from 'next/image';
const History = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

          <Image src={img} width={500} height={300} alt='picture' className='rounded-xl' />

          <div>
            <h1 className="text-5xl font-bold "><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#61f4de] to-[#6e78ff] '>Why Rational Roundtable ?</span></h1>
            <p className="py-2">In the early days of intellectual exploration, a group of inquisitive minds sought a platform where reason and critical thinking could converge in a meaningful dialogue. Thus, in 2023, the Rational Roundtable was born—an endeavor dedicated to fostering thoughtful conversations in a world often overwhelmed by noise.</p>
            <p>
              The founders, a diverse ensemble of thinkers from various fields, envisioned a space where complex issues could be dissected with clarity, where discussions transcended the superficial, and where rationality prevailed over rhetoric. The Roundtable became a beacon for those who craved depth in dialogue and sought to elevate the discourse surrounding contemporary issues.
            </p>


            <p>Over the years, the Rational Roundtable has evolved into a trusted hub for intellectual exchange. Through podcasts, articles, and engaging discussions, the platform has garnered a community of thinkers united by their commitment to reason, evidence, and open-minded exploration. The Roundtables journey continues to unfold, driven by the shared vision of cultivating a space where ideas flourish and where the pursuit of truth is a collective endeavor.

              Join us on this journey through the annals of reason. Welcome to the Rational Roundtable.</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default History;