import React, {useContext, useEffect} from 'react';

import ItemContext from '../context/item/ItemContext';
import Cartitem from "./cartitem";


const Cart = (props)=>{

  const context = useContext(ItemContext);
  const {cart, getCart} = context;

  useEffect(()=>{
    getCart();
  })

  if (localStorage.getItem("token")){
    return (
      <>
      {cart.map((item)=>{
        return <Cartitem key={item._id} id = {item._id} item = {item} />
      })}
      </>
    )
  }else{
    return(
      <h1>No item please login first</h1>
    )
  }


}


export default Cart;
