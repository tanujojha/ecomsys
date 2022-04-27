import React, {useContext} from 'react';
import  {Link} from "react-router-dom";
import ItemContext from '../context/item/ItemContext';


const Cart = (props)=>{

  const context = useContext(ItemContext);
  const {citem} = context;

  return (
    <>
    <h1>Hello </h1>
    <div className="card mx-2 my-2" style={{width: "18rem"}}>
      <img src={citem.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{citem.name}</h5>
        <p className="card-text">{citem.description}</p>
      </div>
      <Link to="/addtocart"><button className="btn btn-sm btn-success">add to cart</button></Link>
      <Link to="/addtowishlist"><button className="btn btn-sm btn-success my-2">add to wishlist</button></Link>

    </div>
    </>
  )
}


export default Cart;
