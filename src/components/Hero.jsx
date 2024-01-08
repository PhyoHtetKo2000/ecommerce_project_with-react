import React from 'react';

import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';




const Hero = () => {
  return (
    <div className=" bg-pink-200 h-[680px] bg-no-repeat bg-hero bg-cover bg-center">
      <div className=" flex justify-around h-full container items-center mx-auto">
        <div className=" flex flex-col ms-5 ">
          <div>
            <div className=' flex items-center font-semibold'>
              <div className=' w-10 h-[2px] bg-red-500 mx-2'></div>New Trend</div>
          </div>
          <h1 className="text-[70px] font-light">
            Phyo Sale Stylish <br />
            <span className=" font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className=' font-semibold border-b-2 uppercase self-start border-black'>Discover More</Link>
        </div>

        <div className=" hidden lg:block">
          <img src={WomanImg} className=' h-[600px]' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
