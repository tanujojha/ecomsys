import React, {useContext} from "react";
import  {Link} from "react-router-dom";
import ItemContext from '../context/item/ItemContext';


const Item = (props)=> {

  const context = useContext(ItemContext);

  const {viewItem} = context;

  const handelView = ()=>{
    viewItem(props.item.id);
  }


  return (

      <div className="card mx-2 my-2" style={{width: "18rem"}}>
        <img src={props.item.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">{props.item.description}</p>
          <Link to={`/items/viewitem/${props.id}`} onClick = {handelView} className="btn btn-primary">view product</Link>
        </div>
        <Link to="#"><button className="btn btn-sm btn-success">add to cart</button></Link>
        <Link to="#"><button className="btn btn-sm btn-success my-2">add to wishlist</button></Link>

      </div>

  )
}

export default Item;
