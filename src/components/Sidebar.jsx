import React, { useContext } from 'react';
// import Link
import {Link} from 'react-router-dom'
// import icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io';
// import Componment
import CartItem from './CartItem'
// import use Context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart Context
import { CartContet } from '../contexts/CartContext';

const Sidebar = () => {
  // sidebar Context
  const {isOpen,setIsOpen,handleClose} = useContext(SidebarContext)

  const { cart, clearCart, total } = useContext(CartContet);

  // Cart Context
  // const {cart,setcart} = useContext(CartContet)
  


  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } 'w-full h-full bg-white fixed  top-0 md:w-[35vw] xl:max-w-[30vw] shadow-2xl  z-20 px-4 transition-all duration-300 lg:mx-[35px]'`}
    >
      <div className=" flex justify-between items-center border-b">
        <h2 className=" font-semibold uppercase my-2">Shopping Bag (0)</h2>
        <IoMdArrowForward
          onClick={handleClose}
          className=" text-2xl flex justify-center items-center my-2 "
        />
      </div>
      <div className=" flex flex-col gap-y-2 h-[450px] lg-h-[320px] overflow-y-scroll border-b overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" mt-5  ">
        <div className="flex justify-between items-center ">
          <div className=" font-semibold">
            <span>Total:</span>
            {parseFloat(total).toFixed(2)}
          </div>
          <div className=' flex gap-2'>
            <div className=' bg-blue-600 py-4 w-10 h-10 flex justify-center items-center text-white text-xl'><IoMdCart/></div>
            <div
              onClick={clearCart}
              className=" bg-red-500 py-4 w-10  h-10 flex justify-center items-center text-white"
            >
              <FiTrash2 className=" text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
