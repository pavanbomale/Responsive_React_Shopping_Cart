import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart(props) {
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => setIsMobile(!isMobile);

  const { cartItems, onAdd, onRemove } = props;
  const itemTotal = cartItems.reduce(
    (prev, current) => prev + current.price * current.qty,
    0
  );
  const shipping = itemTotal > 400 ? 0 : 40;
  const cartTotal = itemTotal + shipping;

  return (
    <>
      <div className={isMobile ? "cart-holder mobile-cart" : "cart-holder"}>
        
          <h1>My Basket</h1>
          {cartItems.length === 0 && <div>Basket is empty</div>}
  
        <div className="cart-icon" onClick={handleClick}>
          <i className="fal fa-shopping-basket"></i>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-content">
            <div className="col1">
              <div>
                <img className="cart-img" src={item.imgsrc} alt="" />
              </div>
              <div>{item.name}</div>
            </div>

            <div className="col2">
              <button onClick={() => onAdd(item)} className="increment">
                +
              </button>
              <span>{item.qty}</span>
              <button onClick={() => onRemove(item)} className="decrement">
                -
              </button>
              <div className="cart-tem-price"> &#8377; {item.price}</div>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="cartDesc">
              <div className="itemtotal">
                <h4>Items Price:</h4>&#8377; {itemTotal}
              </div>
              <div className="shipping">
                <h4>Delivery Charges:</h4> &#8377; {shipping}
              </div>
              <div className="carttotal">
                <h4>Total:</h4> &#8377; {cartTotal}
              </div>
              {itemTotal < 400 && (
                <div>
                  Add items worth {400 - itemTotal} to get eligible for free
                  delivery
                </div>
              )}
              <button className="checkout">
                <Link to="/checkout" className="checkout-link">
                  Check Out
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
