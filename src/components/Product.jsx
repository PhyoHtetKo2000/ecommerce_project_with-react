import React, { useContext } from 'react'; 
// import link
import {Link} from 'react-router-dom'
// import icons
import {BsPlus, BsEyeFill} from 'react-icons/bs'
// import CartContext
import { CartContet } from '../contexts/CartContext';


const Product = ({product}) => {
  // console.log(product)
  // object destructure
  const {id,category,image,title,price} = product;

  const {addToCart} = useContext(CartContet)
  return (
    <div className='mt-12'>
      <div className=" border border-[#e4e4e4] w-full h-[300px] group mb-4 transtation relative overflow-hidden">
        <div className=" w-full h-full flex justify-center align-middle">
          <div className=" flex justify-center align-middle">
            <img
              className=" h-[160px] my-auto group-hover:scale-110 transtation duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className=" absolute top-0 right-0 flex justify-center items-center p-2 flex-col opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div
                onClick={()=>addToCart(product,id)}
                className="  mb-2 backdrop:w-10 h-10 text-white bg-red-500 flex justify-center items-center"
              >
                <BsPlus className=" text-3xl" />
              </div>
              <Link
                to={`/product/${id}`}
                className=" w-10 h-10 flex justify-center items-center bg-white drop-shadow-lg"
              >
                <BsEyeFill className=" text-primary" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* category/ title/ price */}
      <div>
        <div>{category}</div>
        <Link to={"/product/${id}"}>
          <h2 className=" font-semibold mb-1 hover:underline">{title}</h2>
        </Link>
        <div className=' font-semibold'>${price}</div>
      </div>
    </div>
  );
};

export default Product;
