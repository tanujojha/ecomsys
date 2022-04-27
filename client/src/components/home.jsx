import React, {useContext, useState, useEffect} from "react";
import Item from "./item"
import ItemContext from '../context/item/ItemContext';


const Home = ()=> {

  const context = useContext(ItemContext);
  const {items, getItems} = context;


  useEffect(()=>{
    getItems();
  })


  return (
    <div className= "my-3 row">
    {items.map((item) => {
          return <Item key={item._id} id = {item._id} item = {item} />
      })}
    </div>
  )
}

export default Home;
