import React from 'react';
import { createContext,useState,useEffect } from 'react';

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
// fetch data
const fetchProduct = async () =>{
  const api = await fetch("https://fakestoreapi.com/products");
  const data = await api.json()
  setProducts(data)
}

useEffect(() => {
fetchProduct()
}, [])

  return <ProductContext.Provider value={{products}}>
    <div>{children}</div>
  </ProductContext.Provider>
};

export default ProductProvider;
