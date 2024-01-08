import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';
import { CartContet } from '../contexts/CartContext';

const ProductDetails = () => {
  const {id} = useParams()
  const { products } = useContext(ProductContext);
  const {addToCart} = useContext(CartContet)

  const product = products.find(item=>{
    return item.id === parseInt(id)
  })
  
  if(!product){
    return <div className=' h-screen flex justify-center items-center'>Loading.....</div>
  }
  
  const {title,price,image,description} = product
  return (
    <div className=" py-28 lg:py-36">
      <div className=" container m-auto">
        <div className=" flex flex-col lg:flex-row items-center">
          <div className=' flex flex-1 justify-center items-center mb-5 lg:mb-0'>
            <img src={image} className=' w-[200px] lg:max-w-sm' alt="" /></div>
          <div className=' flex-1 text-center lg:text-left'>
            <div className=' lg:max-w-[400px] text-xl font-semibold hover:underline mb-3'>{title}</div>
            <div className=' text-red-500 font-medium mb-3'> ${price}</div>
            <p className=' mb-3  lg:max-w-[500px]'>{description}</p>
            <button onClick={()=>addToCart(product,product.id)} className=' bg-gray-700 p-2 rounded-md mb-3 text-white hover:text-red-500'>Add to Cart</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
