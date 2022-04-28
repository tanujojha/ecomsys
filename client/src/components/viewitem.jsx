import React, {useContext} from "react";
import  {Link} from "react-router-dom";
import ItemContext from '../context/item/ItemContext';


const Viewitem = ()=> {

  const context = useContext(ItemContext);
  const {viewItem} = context;



  return (
    <div className="card mx-2 my-2" style={{width: "18rem"}}>
      <img src={viewItem.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{viewItem.name}</h5>
        <p className="card-text">{viewItem.description}</p>
      </div>
      <Link to="#"><button className="btn btn-sm btn-success">add to cart</button></Link>
      <Link to="#"><button className="btn btn-sm btn-success my-2">add to wishlist</button></Link>

    </div>
  )
}

export default Viewitem;
