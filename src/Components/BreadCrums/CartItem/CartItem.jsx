import { useContext } from "react";
import "./cartItem.css";
import { ShopContext } from "../../../Context/ShopContext";
import remove_icon from "../../../Assets/cart_cross_icon.png";
const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cart">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="format-main">
                <img
                  src={e.image}
                  alt="cart"
                  className="carticon-producticon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="removeicon"
                  src={remove_icon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="items-total">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="items-total">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="items-total">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="promo-code">
          <p>enter your promo code here</p>
          <div className="promo-box">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
