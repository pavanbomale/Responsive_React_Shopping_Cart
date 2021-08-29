import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Main from "./Main";
import Data from "../../Data";
import "./Menu.css";
import Fooditem from "./Fooditem";

function Menu() {
  const { fooditems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (fooditem) => {
    const exist = cartItems.find((x) => x.id === fooditem.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === fooditem.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else{
      setCartItems([...cartItems, {...fooditem, qty:1}])
    }
  };

  const onRemove = (fooditem) => {
    const exist = cartItems.find((x) => x.id === fooditem.id)
    if(exist.qty===1){
      setCartItems(cartItems.filter((x) => x.id !== fooditem.id))
    }
    else{
      setCartItems(
        cartItems.map((x) =>
          x.id === fooditem.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <>
      <div className="menu">
        <Main onAdd = {onAdd} fooditems={fooditems} />
      </div>
      <div className="cart">
        
      <Cart onAdd = {onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </>
  );
}

export default Menu;
