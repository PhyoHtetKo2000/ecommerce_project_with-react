import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContet } from '../contexts/CartContext';

const CartItem = ({item}) => {
// object destructure
const {id,title,image,price,amount} = item

const { removeFromCart, incresAmount,decreseAmount } = useContext(CartContet);


  return (
    <div>
      <div className=" w-full h-[150px] flex items-center gap-4 border-b xl:px-6">
        <div className=" max-w-[70px]">
          <Link to={`/product/${id}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        {/* title and remove icons */}
        <div className="">
          <div className="flex gap-16 mb-2">
            <Link
              className=" text-sm uppercase font-semibold hover:underline max-w-[150px] lg:max-w-[240px] xl:max-w-[240px] md:max-w-[240px]"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className=" text-xl cursor-pointer"
            >
              <IoMdClose className=" text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex justify-between mt-3">
            {/* quantity */}
            <div className=" flex gap-x-3 justify-center items-center border px-1 select-none">
              <div className="" onClick={() => decreseAmount(id)}>
                <IoMdRemove />
              </div>
              <div className=' select-none'>{amount}</div>
              <div className="" onClick={() => incresAmount(id)}>
                <IoMdAdd />
              </div>
            </div>
            x
            {/* price */}
            <div>${price}</div>
            =
            {/* final price */}
            <div>${`${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
