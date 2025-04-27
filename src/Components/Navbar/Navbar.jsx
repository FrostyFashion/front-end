import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>frostyFashion</p>
      </div>
      <ul className="nav-list">
        <li onClick={() => setMenu("shop")}>
          {" "}
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("collections")}>
          <Link to="/collection"> Collection</Link>{" "}
          {menu === "collections" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men"> Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="auth-cart">
        <Link to="/signup">
          <button>Account</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="cart icon" />
        </Link>
        <div className="nav-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
