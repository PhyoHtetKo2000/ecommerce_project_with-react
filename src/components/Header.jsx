import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
// import icons
import { BsBag } from "react-icons/bs";
import { CartContet } from "../contexts/CartContext";
// logo import
import Logo from '../img/logo.svg'



const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContet)
  const [isActive, setIsActive] = useState(true)
  
  // event listener
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
 

 
  return (
    <div
      className={` fixed ${
        isActive ? " bg-white py-4 shadow-md" : " bg-none py-2"
      }  w-full z-10 transition-all`}
    >
      <div className=" container  flex justify-between  items-center px-5  mx-auto  md:px-0 relative">
        <div>
          <Link to={'/'}>
            <img src={Logo} className=" w-[40px]" alt="" />
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <BsBag className=" text-2xl cursor-pointer select-none" />
          <div
            className=" bg-red-600 rounded-full w-[12px] h-[12px] absolute lg:-right-1 lg:top-5 right-4 top-5
           md:-right-1 flex justify-center p-2 items-center text-white"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
