import React, {useContext, useEffect} from 'react';
import ItemContext from '../context/item/ItemContext';
import Wishlistitem from "./wishlistitem";


const Wishlist = (props)=>{

  const context = useContext(ItemContext);
  const {wishlist, getWishlist} = context;

  useEffect(()=>{
    getWishlist();
  })

  if (localStorage.getItem("token")){
    return (
      <>
      {wishlist.map((item)=>{
        return <Wishlistitem key={item._id} id = {item._id} item = {item} />
      })}
      </>
    )
  }else{
    return(
      <h1>No item please login first</h1>
    )
  }


}


export default Wishlist;
