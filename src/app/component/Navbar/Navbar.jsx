import Image from 'next/image';
import React from 'react';
import logo from '../../../asset/Rational Roundtable-logos_white.png'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='conainer mx-auto '>
      <div className="navbar  px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/podcast'}>Episodes</Link>
              </li>
            </ul>


          </div>

          <Image src={logo} width={300} height={300} alt='logo' />


        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold uppercase">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/podcast'}>Episodes</Link>
            </li>





          </ul>
          <button className="btn"> <Link href={'/'}>SUBSCRIBE</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;