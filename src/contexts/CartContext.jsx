import React, { createContext, useEffect, useState } from 'react';

export const CartContet = createContext()

const CartProvider = ({children}) => {
  // cart state
  const [cart, setCart] = useState([]);
  // cartitem Amount state
  const [itemAmount,setItemAmount] = useState("")
 
  // total state
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    const total = cart.reduce((pv,cv)=>{
      return pv+ (cv.price * cv.amount)
    },0)
    setTotal(total)
  })

  // update item amount
  useEffect(()=>{
   if(cart){
    const amount = cart.reduce((pv,cv)=>{
      return pv+cv.amount;
    },0)
    
    setItemAmount(amount)
   }
  },[cart])

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // console.log(newItem);
    
    // check item already in cart
      const cartItem = [...cart].find((item) => {
        return item.id === id;
      });
      // console.log(cartItem)

      // if cartitem is already in cart
      if(cartItem){
        const newCart = cart.map((item)=>{
          if(item.id===id){
            return {...item,amount: cartItem.amount + 1}
          }else{
            return item;
          }
        })
        setCart(newCart)
      }else{
        setCart([...cart,newItem])
      }
  };

  // Remove From Cart
  const removeFromCart = (id) =>{
    const newCart = cart.filter(item=>{
      return item.id !== id
    })
    setCart(newCart)
  }

  // clear Cart
  const clearCart =()=>{
    setCart([])
  }

  // increseCart
  const incresAmount = (id) =>{
    const cartItem = cart.find(item=> item.id===id)
    // console.log( `item ${id} amount increse`)
    // console.log(item)
    addToCart (cartItem,id)
  }

  // decreseAmount
  const decreseAmount =(id)=>{
    const cartItem = cart.find(item=>item.id===id)
     if(cartItem){
      const newCart = cart.map(item=>{
        if(item.id === id){
          return {...item,amount : cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart)
     }
     if(cartItem.amount < 2){
      removeFromCart(id)
     }
  }

  return (
    <CartContet.Provider
      value={{
        incresAmount,
        decreseAmount,
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContet.Provider>
  );
};

export default CartProvider;
