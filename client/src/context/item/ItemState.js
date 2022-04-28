import React, {useState} from 'react';
import ItemContext from './ItemContext';


const ItemState = (props)=> {

  const host = "http://localhost:5000";

  const [items, setItems] = useState([]);

  const [viewItem, setViewItem] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    review: "",
    rating: ""
  });

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([])


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

  const getViewItem = async(id)=>{
    const response = await fetch(`${host}/api/items/viewitem/${id}`,{
      method: "GET",
      header:{
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    setViewItem(data)

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

  // show cart Items

  const getCart = async()=>{
    const response = await fetch(`${host}/api/items/cartitems`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setCart(data)
  }

  // show wishlist Items

  const getWishlist = async()=>{
    const response = await fetch(`${host}/api/items/wishlistitems`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setWishlist(data)
  }

  // add to wishlist

  const addToWishlist = async (id)=>{
    const response = await fetch(`${host}/api/items/addtowishlist/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setWishlist(data)
  }


  // delete item from wishlist

  const deleteFromWishlist = async (id)=>{
    const response = await fetch(`${host}/api/items/deletefromwishlist/${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json()
    setWishlist(data)
  }



  return (
  <ItemContext.Provider value = {{items, getItems, viewItem, getViewItem, cart, getCart, addToCart, deleteFromCart, wishlist, getWishlist, deleteFromWishlist, addToWishlist}}>
    {props.children}
  </ItemContext.Provider>
)

}


export default ItemState;
