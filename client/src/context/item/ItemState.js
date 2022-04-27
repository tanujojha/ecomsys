import React, {useState} from 'react';
import ItemContext from './ItemContext';


const ItemState = (props)=> {

  const host = "http://localhost:5000";

  const [items, setItems] = useState([]);

  const [citem, setCitem] = useState([]);

  const [cart, setCart] = useState([])

  //get all items

  const getItems = async()=>{
    const response = await fetch(`${host}/api/items/getallitems`, {
      method: "GET",
      header:{
        "Content-Type": 'application/json'
      }
    });
    const data = await response.json();
    setItems(data);
  }


  //view item

  const viewItem = async(id)=>{
    const response = await fetch(`${host}/api/items/viewitem/${id}`,{
      method: "GET",
      header:{
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    setCitem(data)

  }


  // add to cart

  const addToCart = async (id)=>{
    const response = await fetch(`${host}/api/items/addtocart/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setCart(data)
  }


  // delete item from cart

  const deleteFromCart = async (id)=>{
    const response = await fetch(`${host}/api/items/deletefromcart/${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setCart(data)
  }


  return (
  <ItemContext.Provider value = {{items, getItems, citem}}>
    {props.children}
  </ItemContext.Provider>
)

}


export default ItemState;
